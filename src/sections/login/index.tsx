import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "components/Navbar";
import Helmet from "react-helmet";

import "./index.scss";

export default () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header>
        <div className="bg-angle" />
        <section>
          <Navbar />
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form className='login-form shadow'>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <p className="text-center">
                    <Button variant="secondary" type="submit">
                      Login
                    </Button>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};
