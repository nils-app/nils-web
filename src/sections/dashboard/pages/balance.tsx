import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from "../components/Header";

export default () => {
  return (
    <>
      <div className="header bg-gradient">
        <Header />
      </div>
      <Row className="content padded">
        <Col>
          <div className="dashboard-widget">
            <h2>Balance history</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                <FontAwesomeIcon icon='save'/> Save changes
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};