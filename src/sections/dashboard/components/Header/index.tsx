import React, { useCallback } from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import Help from '../Help';
import './index.scss';

type Props = {
};

export default (props: Props) => {
  const signOut = useCallback((e: MouseEvent) => {
    e.preventDefault();


  }, []);

  return (
    <Row className='header'>
      <Col>
        <Navbar bg="transparent" variant="dark">
          <Navbar.Collapse className="justify-content-end">
            <Help />
            <Nav.Link as='a' href='/' onClick={ signOut }>
              <FontAwesomeIcon icon="sign-out-alt" /> Sign Out
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
