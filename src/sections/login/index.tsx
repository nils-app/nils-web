import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { API_URL } from "../../constants";
import Navbar from "components/Navbar";
import "./index.scss";

const providers = ['Github', 'Google'];

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
                <div className='login-form shadow text-center'>
                <h2 className='mb-5'>Sign in</h2>
                { providers.map((provider) => {
                  const providerName: any = provider.toLowerCase();
                  return (
                    <a
                      key={ provider }
                      href={ `${API_URL}/auth/${providerName}?returnTo=http://localhost:3000/dashboard` }
                      className={ classNames('btn', `btn-${providerName}`, 'mb-4', 'mx-2') }
                    >
                      <FontAwesomeIcon icon={ ['fab', providerName] } />
                      Sign in with { provider }
                    </a>
                  );
                }) }
                <br/>
                <p>
                  <a
                      href={ `${API_URL}/auth/local/demo?returnTo=http://localhost:3000/dashboard` }
                      className={ classNames('btn', `btn-primary`, 'mb-4', 'mx-2') }
                    >
                      Demo account
                    </a>
                </p>
                <hr className='mt-5 mb-4' />
                <p className='text-muted'>
                  <small>
                  We'll create an account for you if it's your first time signing in.
                  </small>
                </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};
