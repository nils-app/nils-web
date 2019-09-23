import React from "react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import Navbar from "components/Navbar";

import "./index.scss";
import faq from './faq';

export default () => {
  return (
    <>
      <header className='landing'>
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
                  <h3>Get started</h3>
                  <p>
                    <Button variant='secondary' href="/dashboard">Internet user</Button>
                    <Button variant='secondary' href="/dashboard">Content creator</Button>
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
      <section className='content'>
          <Container>
            <h3 style={{ marginBottom: '1.5em' }}>Frequently Asked Questions</h3>
            <Accordion className='simple'>
              {faq.map((q, index) => (
                <Card key={q.question}>
                  <Accordion.Toggle as={Card.Header} eventKey={String(index)}>
                    {q.question}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body>
                      {q.answer}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Container>
        </section>
    </>
  );
};
