import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import Help from '../Help';
import './index.scss';

type Props = {
};

export default (props: Props) => (
  <Row className='header'>
    <Col>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand as={NavLink} to="/dashboard">
          Dashboard
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Help />
          <Nav.Link as={NavLink} to="/">
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
);
