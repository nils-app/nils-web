import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  { providers.map(provider => {
                    const providerName: any = provider.toLowerCase();
                    return (
                      <a
                        key={ provider }
                        href={ `http://nils.local/auth/${providerName}?returnTo=http://localhost:3000/dashboard` }
                        className={ `btn btn-${providerName} mr-2` }
                      >
                        <FontAwesomeIcon icon={ ['fab', providerName] } />
                        Sign in with { provider }
                      </a>
                    );
                  }) }
                  <hr className='mt-5 mb-4' />
                  <p className='text-muted'>
                    <small>
                    We will create an account for you if it's the first time you sign in.
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
