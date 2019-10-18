import React from "react";
import { Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";

import Header from "../components/Header";
import AddDomain from "./AddDomain";
import { useStateValue } from "store/state";

export default () => {
  const { state } = useStateValue();

  return (
    <>
      <Helmet>
        <title>Domains</title>
      </Helmet>
      <div className="header bg-gradient">
        <Header />
      </div>
      <Row className="content padded">
        <Col>
          <div className="dashboard-widget">
            <Row>
              <Col>
                <h2>Domains</h2>
              </Col>
              <Col className='text-right'>
                <AddDomain />
              </Col>
            </Row>

            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>
                    Domain
                  </th>
                  <th>
                    Balance
                  </th>
                  <th>
                    Added on
                  </th>
                </tr>
              </thead>
              <tbody>
                { state.domains.map(domain => (
                  <tr key={ domain.uuid }>
                    <td>{ domain.domain }</td>
                    <td>{ domain.balance }</td>
                    <td>{ domain.created_on }</td>
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  );
};
