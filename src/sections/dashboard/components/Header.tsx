import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
};

export default (props: Props) => (
  <Row>
    <Col>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/logout">
            <FontAwesomeIcon icon="question-circle" /> Help
          </Nav.Link>
          <Nav.Link href="/logout">
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
);
