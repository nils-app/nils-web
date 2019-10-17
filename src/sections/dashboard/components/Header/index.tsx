import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { API_URL } from '../../../../constants';
import Help from '../Help';
import './index.scss';

type Props = {
};

export default (props: Props) => {
  return (
    <Row className='header'>
      <Col>
        <Navbar bg="transparent" variant="dark">
          <Navbar.Collapse className="justify-content-end">
            <Help />
            <Nav.Link as='a' href={ `${API_URL}/users/logout` }>
              <FontAwesomeIcon icon="sign-out-alt" /> Sign Out
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
