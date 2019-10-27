import React from "react";
import { Row, Col } from "react-bootstrap";

import { useStateValue } from "store/state";
import { printDate } from "util/date"

import Header from "../components/Header";
import Counter from "../widgets/counter";
import Table from "../widgets/table";

export default () => {
  const { state } = useStateValue();

  const balancesColumns = [
    'Domain',
    'Balance',
  ];
  let balancesData = state.domains;

  const payoutColumns = [
    'Date',
    'Amount',
  ];
  const payoutData = state.payouts;

  let nextPayout = null;
  let nextPayoutDate = 'N/A';
  let lastPayoutDate = '';
  if (payoutData) {
    nextPayout = payoutData.find(payout => !payout.sent_on && payout.estimated_on);
    if (nextPayout && nextPayout.estimated_on) {
      nextPayoutDate = printDate(nextPayout.estimated_on);
    }
    const lastPayout = payoutData.find(payout => payout.sent_on);
    if (lastPayout && lastPayout.sent_on) {
      lastPayoutDate = `Last: ${printDate(lastPayout.sent_on)}`;
    }
  }

  return (
    <>
      <div className="header bg-gradient">
        <Header />
        <Row>
          <Col xs={12} sm>
            <Counter
              title="Balance"
              content="10 Nils"
              icon="coins"
              iconBg="green"
              // change={3.5}
              // history="Since last month"
              href="/dashboard/balance"
              tooltip="View your monthly balance aggregated from all your domains"
            />
          </Col>
          <Col xs={12} sm>
            <Counter
              title="Domains"
              content={ state.domains.length }
              icon="at"
              iconBg="blue"
              href="/dashboard/domains"
              tooltip="Add/Remove Domains"
            />
          </Col>
          <Col xs={12} sm>
            <Counter
              title="Next payout"
              content={ nextPayoutDate }
              icon="credit-card"
              iconBg="orange"
              history={ lastPayoutDate }
              href="/dashboard/payouts"
              tooltip="View your payout settings and history. Your next payout date will appear as soon as your account has some balance"
            />
          </Col>
        </Row>
      </div>
      <Row className="content">
        <Col>
          <Table
            header='Balances'
            columns={ balancesColumns }
            data={ balancesData }
          />
        </Col>
        <Col>
          <Table
            header='Payouts'
            columns={ payoutColumns }
            data={ payoutData }
          />
        </Col>
      </Row>
    </>
  );
};
