import React from "react";
import { useImmer } from "use-immer";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Helmet from "react-helmet";

import { useStateValue } from "store/state";
import { fetchResource } from "util/fetch";
import TransferWise from "components/TransferWise";
import Header from "sections/dashboard/components/Header";

import PayoutList from './PayoutList';
import AccountStatus from './AccountStatus';

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

  const updateField = (field: keyof State['recipient']) => (e: React.ChangeEvent<any>) => {
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
                <AccountStatus />
              </Col>
            </Row>

            { (localState.saving) && (
              <p>Processing...</p>
            ) }

            { (localState.error) && (
              <Alert variant='danger'>
                { localState.error }
              </Alert>
            ) }

            { (localState.recipientResponse) && (
              <Alert variant='info'>
                TransferWise will email you with a link to collect your bank account details. <br/>
                Once you provide your bank account details securely to TransferWise we will be able to send payouts.
              </Alert>
            ) }

            { (!localState.saving && !localState.error && !hasPayoutsSetup) && (
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={ addRecipient }>
                  <h3 className='mb-4'>Set up payment information</h3>
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
                  <div className='mt-4 text-muted'>
                    <small>
                    Your account data (name, email address and currency) are only stored by TransferWise. We will store a numerical identifier for your account that allows us to send you payments.
                    </small>
                  </div>
                </Form>
              </Col>
            ) }
            { (hasPayoutsSetup) && (
              <>
                <PayoutList />
                <Button size='sm' onClick={ sendPayout }>Send sample payout</Button>
              </>
            ) }
            <div className='text-right'>
              <TransferWise />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
