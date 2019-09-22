import React from "react";
import {
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "components/Sidebar";
import Counter from './widgets/counter';

export default () => {
  return (
    <>
      <Row noGutters className='full-height'>
        <Col xs="2" className='full-height'>
          <Sidebar />
        </Col>
        <Col>
          <div className="header bg-gradient">
              <Row>
                  <Col>
                  <Navbar bg="transparent" variant="dark">
                      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                      <Navbar.Collapse className="justify-content-end">
                      <Nav.Link href="/logout">
                        <FontAwesomeIcon icon="sign-out-alt" /> Logout
                      </Nav.Link>
                      </Navbar.Collapse>
                  </Navbar>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Counter
                      title='Balance'
                      content='10 Nils'
                      icon='coins'
                      iconBg='green'
                      change='3.5%'
                      history='Since last month'
                      href='/balance'
                    />
                  </Col>
                  <Col>
                    <Counter
                      title='Domains'
                      content='3'
                      icon='at'
                      iconBg='blue'
                    />
                  </Col>
                  <Col>
                    <Counter
                      title='Next payout'
                      content='-'
                      icon='credit-card'
                      iconBg='orange'
                      history='Last: 5th Sep 2019'
                    />
                  </Col>
              </Row>
          </div>
          <Row className="content padded">
            <Col>
                <div className="dashboard-widget">
                <h2>Balances</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>Domain</th>
                        <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>aurbano.eu</td>
                        <td>104 Nils</td>
                        </tr>
                        <tr>
                        <td>nilsapp.com</td>
                        <td>500 Nils</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </Col>
            <Col>
                <div className="dashboard-widget">
                <h2>Payouts</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>Reference</th>
                        <th>Date</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>NILS1020</td>
                        <td>5<sup>th</sup> Sep 2019</td>
                        <td>£10</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
