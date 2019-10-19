import React from "react";
import { Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";

import Header from "../components/Header";
import AddDomain from "./AddDomain";
import DeleteDomain from "./DeleteDomain";
import { useStateValue } from "store/state";

export default () => {
  const { state } = useStateValue();

  const locale = undefined;
  const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const onDelete = (uuid: string) => () => {
    console.log('delete domain', uuid);
  };

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
                  <th style={ { width: 100 } }>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                { state.domains.map(domain => (
                  <tr key={ domain.uuid } className='hover-show'>
                    <td>{ domain.domain }</td>
                    <td>{ domain.balance }</td>
                    <td>{ (new Date(domain.created_on)).toLocaleDateString(locale, dateOpts) }</td>
                    <td className='text-rigth'>
                      <span className='hide text-danger'>
                        <DeleteDomain
                          name={ domain.domain }
                          onConfirm={ onDelete(domain.uuid) }
                        />
                      </span>
                    </td>
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
