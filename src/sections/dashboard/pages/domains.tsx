import React, { useState } from "react";
import { Row, Col, Alert, Table } from "react-bootstrap";
import Helmet from "react-helmet";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import AddDomain from "./AddDomain";
import DeleteDomain from "./DeleteDomain";
import { useStateValue } from "store/state";
import { fetchResource } from "util/fetch";
import { Domain } from "store/types";
import { printDate } from "util/date";

export default () => {
  const { state, dispatch } = useStateValue();
  const [deletingDomain, setDeletingDomain] = useState<string | null>(null);
  const [errorDeletingDomain, setErrorDeletingDomain] = useState<any>(null);

  const deleteDomain = async (domain: Domain) => {
    setDeletingDomain(domain.domain);
    try {
      await fetchResource(
        `/domains/${domain.uuid}`,
        'DELETE',
      );
      setDeletingDomain(null);
      dispatch({
        type: 'deleteDomain',
        payload: domain.uuid,
      })
    } catch (e) {
      setDeletingDomain(null);
      setErrorDeletingDomain(e.message);
    }
  };

  const onDelete = (domain: Domain) => () => {
    deleteDomain(domain);
  }

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

            { errorDeletingDomain && (
              <Alert variant='danger'>
                { errorDeletingDomain }
              </Alert>
            ) }

            <div className="table-widget">
              <Table responsive striped size='sm'>
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
                    <tr key={ domain.uuid } className={ classNames('hover-show', { 'text-muted': deletingDomain === domain.domain }) }>
                      <td>{ domain.domain }</td>
                      <td>{ domain.balance }</td>
                      <td>{ printDate(domain.created_on) }</td>
                      <td className='text-rigth'>
                        { deletingDomain ? (
                          <span className="text-muted">
                            <FontAwesomeIcon icon='spinner' pulse />
                          </span>
                        ) : (
                          <span className='hide text-danger'>
                            <DeleteDomain
                              name={ domain.domain }
                              onConfirm={ onDelete(domain) }
                            />
                          </span>
                        ) }
                      </td>
                    </tr>
                  )) }
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
