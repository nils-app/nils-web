import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "components/Navbar";

import './index.scss';

export default () => {
  return (
    <>
      <header>
        <div className="bg-angle" />
        <section>
          <Navbar />
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
    </>
  );
};
