import React from "react";
import { Row, Col } from "react-bootstrap";

import Header from "../components/Header";
import Counter from "../widgets/counter";
import Table from "../widgets/table";

export default () => {
  const balancesColumns = [
    'Domain',
    'Balance',
  ];
  const balancesData = [
    {
      Domain: 'aurbano.eu',
      Balance: '104 Nils',
    },
    {
      Domain: 'nilsapp',
      Balance: '500 Nils',
    },
  ];

  const payoutColumns = [
    'Reference',
    'Date',
    'Amount',
  ];
  const payoutData = [
    {
      Reference: 'NILS420',
      Date: '5th Sep 2019',
      Amount: '£10',
    },
  ];

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
              change={3.5}
              history="Since last month"
              href="/dashboard/balance"
              tooltip="View your monthly balance"
            />
          </Col>
          <Col xs={12} sm>
            <Counter
              title="Domains"
              content="3"
              icon="at"
              iconBg="blue"
              href="/dashboard/domains"
              tooltip="Add/Remove Domains"
            />
          </Col>
          <Col xs={12} sm>
            <Counter
              title="Next payout"
              content="1st Oct 2019"
              icon="credit-card"
              iconBg="orange"
              history="Last: 5th Sep 2019"
              href="/dashboard/payouts"
              tooltip="View your payout settings and history"
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
