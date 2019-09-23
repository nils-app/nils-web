import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

type Props = {};

export default (props: Props) => (
  <footer>
    <div className="more">
    <Container>
        <Row>
          <Col md={ 2 }>
            <h4>Contact</h4>
            <p>
              Reach out on:<br />
              <a href="mailto:help@nilsapp.com">help@nilsapp.com</a>
            </p>
          </Col>
          <Col>
            <h4>Want to help?</h4>
            <p>
              Nils is Open Source, released under the <a href="https://github.com/nils-app/nils-web/blob/master/LICENSE">AGPL-3 License</a>.
            </p>
            <p>
              View and contribute to <a href="https://github.com/nils-app">Nils on Github</a>.
            </p>
          </Col>
          <Col>
            <h4>About</h4>
            <p>
              Nils is only a small Proof of Concept of what the future web could be.
            </p>
            <p>
              Hopefully one day more ideas like Nils appear, and the web changes as a whole!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="company">
      <Container>
        <Row>
          <Col>Made with <FontAwesomeIcon icon='heart' /> in London, UK</Col>
          <Col md={2} className='text-right'>
            &copy; Nils
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);
