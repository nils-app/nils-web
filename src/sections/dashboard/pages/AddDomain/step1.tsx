import React, { useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { useImmer } from 'use-immer';

type Props = {
  next: (domain: string) => void,
};

type State = {
  domain: string,
  validated: boolean,
};

export default (props: Props) => {
  const [localState, setState] = useImmer<State>({
    domain: '',
    validated: false,
  });

  const addDomain = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState(draft => {
      draft.validated = true;
    });
    if (form.checkValidity()) {
      props.next(localState.domain)
    }
  };

  const onDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e || !e.currentTarget) {
      return;
    }
    const value = e.currentTarget.value;
    setState(draft => {
      draft.domain = value;
    });
  };

  return (
    <>
      <Form validated={ localState.validated } onSubmit={ addDomain }>
        <Form.Group>
          <Form.Label>Domain</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter domain"
            value={ localState.domain }
            onChange={ onDomainChange }
            title='Please enter a domain owned by you (e.g. google.com)'
          />
          <Form.Control.Feedback type="invalid">
            Make sure it's a valid domain name!
          </Form.Control.Feedback>
        </Form.Group>
        <p className='text-center'>
          <Button variant="secondary" type="submit" size='sm' disabled={ localState.domain.length < 1 }>
            Next
          </Button>
        </p>
      </Form>
    </>
  );
};
