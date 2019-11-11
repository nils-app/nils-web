import React from "react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import "./index.scss";
import faq from "./faq";

export default () => {
  return (
    <>
      <header className="landing">
        <div className="bg-angle" />
        <section>
          <Navbar />
          <Container>
            <Row>
              <Col>
                <div className="hero">
                  <h2>Tip the Web</h2>
                  <p>Support content creators on the web directly.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
      <section className="content">
        <Container>
          <Row className='mb-5'>
            <Col>
              <h3 className="small">Frequently Asked Questions</h3>
              <Accordion className="simple">
                {faq.map((q, index) => (
                  <Card key={q.question}>
                    <Accordion.Toggle as={Card.Header} eventKey={String(index)}>
                      {q.question}
                      <div style={{ float: "right" }}>
                        <FontAwesomeIcon icon="angle-right" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={String(index)}>
                      <Card.Body>{q.answer}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col className="get-started mt-5 text-center shadow">
              <Row className="justify-content-md-center">
                <Col md={ 5 } className='border-right pr-3'>
                  <h3>Content Creator?</h3>
                  <p>Get paid by your users for your content!</p>
                  <p>
                    Earn more for content you publish on your website, or
                    platforms such as YouTube, Twitch, Github...
                  </p>
                  <Button variant="secondary" className='rounded-pill' href="/dashboard">
                    Sign Up
                  </Button>
                </Col>
                <Col md={ 5 } className='pl-5'>
                  <h3>Web user?</h3>
                  <p>
                    Support your favourite content creators on the web directly
                    easily!
                  </p>
                  <Button variant="secondary" className='rounded-pill' href="/dashboard">
                    Download extension
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h2 className="mb-4">Roadmap</h2>
              <h5>Support content sharing platforms</h5>
              <p>Nils allows website owners to register their domains and receive payments from users.</p>
              <p>This model doesn't work for content sharing platforms (i.e. YouTube, Medium, Twitch... ) where the actual owner is not the creator of the content.</p>
              <p>If Nils is something that people use, we could consider expanding the scope to these platforms, allowing users to prove ownership of their accounts there.</p>

              <h5>Other ideas</h5>
              <p>As all projects do, Nils will be open to evolve in the direction that best fits it's vision of an Internet that's not built around ads.</p>
              <p>All of the technology is open source, so feel free to either contribute with code or ideas!</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
