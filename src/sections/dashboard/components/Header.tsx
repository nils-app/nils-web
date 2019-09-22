import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  section: string;
};

export default (props: Props) => (
  <Row>
    <Col>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="/">Dashboard</Navbar.Brand>
        <Navbar.Text>
          {props.section}
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/logout">
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
);
