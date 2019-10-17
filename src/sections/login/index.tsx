import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "components/Navbar";
import LoginForm from './form';
import { useStateValue, User } from "store/state";

import "./index.scss";
import useFetch from "util/fetch";

export default () => {
  const { dispatch } = useStateValue();
  const [ isLoading, user, hasError ] = useFetch<User>(
    '/users/current',
    'GET'
  );

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch({
      type: 'login',
      payload: user,
    })
  }, [user, dispatch])

  let content = null;
  if (hasError && hasError.status !== 401) {
    content = (
      <div>
        <p>Errors!</p>
        <p>{ hasError.message }</p>
      </div>
    );
  } else if (isLoading) {
    content = (
      <p className="text-muted">
        <FontAwesomeIcon icon='spinner' pulse /> Loading...
      </p>
    );
  } else {
    content = <LoginForm />;
  }

  return (
    <>
      <header>
        <div className="bg-angle" />
        <section>
          <Navbar />
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <div className='login-form shadow text-center'>
                  { content }
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};
