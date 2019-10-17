import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "components/Navbar";
import LoginForm from './form';
import { useStateValue, User } from "store/state";

import "./index.scss";
import useFetch, { FetchOptions } from "util/fetch";

// TODO Find better way to memoize this inside the component
const getUser: FetchOptions = {
  url: '/users/current',
  method: 'GET',
};

export default () => {
  const { dispatch } = useStateValue();
  const [ isLoading, user, hasError ] = useFetch<User>(getUser);

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
  if (hasError) {
    content = (
      <div>
        <p>Errors!</p>
        <p>{ hasError }</p>
      </div>
    );
  } else if (isLoading) {
    content = (
      <p>Loading...</p>
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
