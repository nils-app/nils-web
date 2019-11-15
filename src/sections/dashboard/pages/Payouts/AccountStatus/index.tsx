import React, { useEffect } from 'react';
import { Button, Modal, Alert, Table } from 'react-bootstrap';
import { useImmer } from 'use-immer';
import classNames from 'classnames';

import { useStateValue } from 'store/state';
import { fetchResource } from 'util/fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'components/Loader';

type State = {
  twData: any,
  showModal: boolean,
  loading: boolean,
  error: any,
};

export default () => {
  const { state } = useStateValue();
  const [localState, setState] = useImmer<State>({
    twData: null,
    showModal: false,
    loading: true,
    error: null,
  });

  if (!state.auth.user || !state.auth.user.transferwise_id) {
    return null;
  }

  const toggleModal = () => {
    setState(draft => {
      draft.showModal = !draft.showModal;
    });
  };

  useEffect(() => {
    fetchResource(
      '/payouts/info',
      'GET',
    ).then(data => {
      setState(draft => {
        draft.error = null;
        draft.loading = false;
        draft.twData = data;
      });
    }, error => {
      setState(draft => {
        draft.error = error;
        draft.loading = false;
        draft.twData = null;
      });
    });
  }, [setState]);

  let icon = null;
  let buttonClass: any = 'success';
  if (localState.loading) {
    icon = <FontAwesomeIcon icon="spinner" pulse />;
    buttonClass = null;
  } else if (localState.twData && !localState.twData.active) {
    icon = <FontAwesomeIcon icon="exclamation-triangle" />;
    buttonClass = 'warning';
  }

  return (
    <>
      <Button variant={ buttonClass } size='sm' onClick={ toggleModal }>
        { icon } Account: { state.auth.user ? state.auth.user.currency : '' }
      </Button>

      <Modal
        show={localState.showModal}
        onHide={toggleModal}
        size="lg"
        aria-labelledby="addDomainTitle"
      >
        <Modal.Header className="bg-fade" closeButton>
          <Modal.Title id="addDomainTitle">
            <FontAwesomeIcon icon="at" /> Account information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { localState.loading && (
            <Loader />
          ) }
          { localState.error && (
            <Alert variant='danger'>
              { String(localState.error) }
            </Alert>
          ) }
          { !localState.loading && localState.twData && (
            <>
              <Table bordered responsive size='sm'>
                <tbody>
                  <tr>
                    <th>
                      Account holder name
                    </th>
                    <td>
                      { localState.twData.accountHolderName }
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Email
                    </th>
                    <td>
                      { localState.twData.details.email }
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Account Status
                    </th>
                    <td className={ classNames({ 'text-success': localState.twData.active, 'text-danger': !localState.twData.active }) }>
                      { localState.twData.active ? 'Active' : 'Inactive' }
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className='mt-4 text-muted'>
                <small>
                Your account data (personal information and banking details) are only stored by TransferWise. TransferWise generates a random unique identifier for your account, which is the only data we store, allowing us to send you payments. <br/>
                The data displayed here is loaded directly from TransferWise.
                </small>
              </div>
            </>
          ) }
        </Modal.Body>
      </Modal>
    </>
  );
};