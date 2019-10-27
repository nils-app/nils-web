import React from "react";
import { useImmer } from "use-immer";
import { Row, Col, Form, Button, Alert, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Helmet from "react-helmet";

import { useStateValue } from "store/state";
import { fetchResource } from "util/fetch";

import Header from "../components/Header";
import PayoutList from './PayoutList';

type State = {
  recipient: {
    accountHolderName: string,
    email: string,
    currency: string,
  },
  saving: boolean,
  error: any,
  recipientResponse: any,
};

export default () => {
  const { state, dispatch } = useStateValue();
  const [localState, setState] = useImmer<State>({
    recipient: {
      accountHolderName: '',
      email: '',
      currency: 'GBP',
    },
    saving: false,
    error: null,
    recipientResponse: null,
  });

  const updateField = (field: keyof State['recipient']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e || !e.currentTarget) {
      return;
    }
    const value = e.currentTarget.value;
    setState(draft => {
      draft.recipient[field] = value;
    });
  };

  const addRecipient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(draft => {
      draft.saving = true;
    });
    try {
      const data = await fetchResource(
        '/payouts',
        'PUT',
        localState.recipient,
      );
      setState(draft => {
        draft.saving = false;
        draft.recipientResponse = data;
      });
      dispatch({
        type: 'setPayoutsTransferwise',
        payload: data.recipient,
      })
    } catch (e) {
      setState(draft => {
        draft.saving = false;
        draft.error = e.message;
      });
    }
  };

  const sendPayout = async () => {
    await fetchResource(
      '/payouts',
      'POST',
      localState.recipient,
    );
  };

  const hasPayoutsSetup = state.auth.user && state.auth.user.transferwise_id;

  return (
    <>
      <Helmet>
        <title>Payouts</title>
      </Helmet>
      <div className="header bg-gradient">
        <Header />
      </div>
      <Row className="content padded">
        <Col>
          <div className="dashboard-widget">
            <Row>
              <Col>
                <h2>Payouts</h2>
              </Col>
              <Col className='text-right'>
                { (hasPayoutsSetup) && (
                  <Badge variant='success'>
                    Payouts Account: { state.auth.user ? state.auth.user.currency : '' }
                  </Badge>
                ) }
              </Col>
            </Row>


            { (!hasPayoutsSetup) && (
              <Alert variant='info'>
                Please set up your payouts information below. <br/>
                We use TransferWise to send you your money, after you enter the account holder name and email address, you will receive an email from TransferWise where you can complete your account and link your bank account.
              </Alert>
            ) }

            { (localState.saving) && (
              <p>Processing...</p>
            ) }

            { (localState.error) && (
              <Alert variant='danger'>
                { localState.error }
              </Alert>
            ) }

            { (!localState.saving && !localState.error && !hasPayoutsSetup) && (
              <Form onSubmit={ addRecipient }>
                <Form.Group>
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={ localState.recipient.accountHolderName }
                    onChange={ updateField('accountHolderName') }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={ localState.recipient.email }
                    onChange={ updateField('email') }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    as="select"
                    value={ localState.recipient.currency }
                    onChange={ updateField('currency') }
                  >
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>USD</option>
                  </Form.Control>
                </Form.Group>

                <p>
                  <Button variant="primary" type="submit" size='sm'>
                    <FontAwesomeIcon icon='save'/> Save
                  </Button>
                </p>

                <Form.Group>
                  <Form.Text className="text-muted">
                    TransferWise will send you an email with more information on the next steps to set up your account to receive payouts.
                  </Form.Text>
                </Form.Group>
              </Form>
            ) }
            { (hasPayoutsSetup) && (
              <>
                <PayoutList />
                <Button size='sm' onClick={ sendPayout }>Send sample payout</Button>
              </>
            ) }
            <div className='mt-4 text-muted'>
              <small>
              Your account data (name, email address and currency) are only stored by TransferWise. We will store a numerical identifier for your account that allows us to send you payments.
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
