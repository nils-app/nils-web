import React from "react";
import { Modal, Alert, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImmer } from "use-immer";

type Props = {
  name: string,
  onConfirm: () => void,
};

type State = {
  confirmName: string,
  showModal: boolean,
};

export default (props: Props) => {
  const [localState, setState] = useImmer<State>({
    confirmName: '',
    showModal: false,
  });

  const toggleModal = () =>
    setState(draft => {
      draft.showModal = !draft.showModal;
      draft.confirmName = "";
    });

  const onNameChange = (e: React.ChangeEvent<any>) => {
    if (!e || !e.currentTarget) {
      return;
    }
    const value = e.currentTarget.value;
    setState(draft => {
      draft.confirmName = value;
    });
  };

  const onConfirm = () => {
    toggleModal();
    props.onConfirm();
  };

  return (
    <>
      <button onClick={ toggleModal } className='btn btn-link btn-sm hide text-danger'>
        <FontAwesomeIcon icon='trash' /> Delete
      </button>

      <Modal
        show={localState.showModal}
        onHide={toggleModal}
        aria-labelledby="confirmDeleteTitle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="confirmDeleteTitle">
            Are you absolutely sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant='warning' style={ { margin: '-1em -1em 1em' } }>
            Unexpected bad things will happen if you don’t read this!
          </Alert>
          <p>
            This action <b>cannot</b> be undone. This will permanently delete domain <b>{ props.name }</b> and associated transactions. Any outstanding balance will stay in your account.
          </p>
          <Form onSubmit={ onConfirm }>
            <Form.Group>
              <Form.Label>Please type in the domain name to confirm.</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter domain"
                value={ localState.confirmName }
                onChange={ onNameChange }
                title='Please confirm the domain name'
              />
              <Form.Control.Feedback type="invalid">
                Make sure it's a valid domain name!
              </Form.Control.Feedback>
            </Form.Group>
            <div className='text-center'>
              <Button variant="danger" type="submit" block disabled={ localState.confirmName !== props.name }>
                Delete
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
