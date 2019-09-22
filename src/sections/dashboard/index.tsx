import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebar from "components/Sidebar";

export default () => {
  return (
    <>
      <Container fluid style={ { padding: 0, margin: 0 } }>
        <Row noGutters>
          <Col xs="2">
            <Sidebar />
          </Col>
          <Col>
            <div className="header bg-gradient">
                <Row>
                    <Col>
                    <Navbar bg="transparent" variant="dark">
                        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#test">Logout</Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="dashboard-widget">
                        <div className="title">Balance</div>
                        <span className="content">10 Nils</span>
                        <span className="icon green">
                            <FontAwesomeIcon icon='coins' />
                        </span>
                        <div className="history">
                            <span className="change text-success">
                                <FontAwesomeIcon icon='arrow-up' /> 3.5%
                            </span>
                            <span className="text-muted">
                                Since last month
                            </span>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="dashboard-widget">
                        <div className="title">Domains</div>
                        <span className="content">3</span>
                        <span className="icon blue">
                            <FontAwesomeIcon icon='at' />
                        </span>
                    </div>
                    </Col>
                    <Col>
                    <div className="dashboard-widget">
                        <div className="title">Next payout</div>
                        <span className="content">-</span>
                        <span className="icon orange">
                            <FontAwesomeIcon icon='credit-card' />
                        </span>
                        <div className="history">
                            <span className="text-muted">
                                Last: 05/09/2019
                            </span>
                        </div>
                    </div>
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
                        <td>05/09/2019</td>
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
      </Container>
    </>
  );
};
