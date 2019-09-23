import React from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import Logo from "components/Logo";

import './index.scss';

export default () => {
  return (
    <div className="landing-page">
      <header>
        <div className="bg" />
        <section>
          <Navbar bg="light" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <Logo /> Nils
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={ NavLink } to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={ NavLink } to="/login">
                  <FontAwesomeIcon icon="sign-in-alt" /> Login
                </Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col>
                <div className="hero">
                  <h2>Tip the Web</h2>
                  <p>
                    Our mission is to move the web towards a future where
                    creators and publishers can get paid for their work{" "}
                    <b>without</b> relying on ads, paywalls, or the abuse of
                    personal data.
                  </p>
                  <h3>Get started:</h3>
                  <p>
                    <Button href="/dashboard">Internet user</Button>
                    <Button href="/dashboard">Content creator</Button>
                  </p>
                  <small className="text-muted">
                    - You can definitely be both!
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </div>
  );
};
