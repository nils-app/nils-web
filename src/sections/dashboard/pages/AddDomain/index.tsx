import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImmer } from 'use-immer';

import Wizard from "components/Wizard";

import StepOne from './step1';

type State = {
  showModal: boolean,
  domain: string,
  currentStep: number,
  steps: string[],
};

export default () => {
  const [localState, setState] = useImmer<State>({
    showModal: true,
    domain: '',
    currentStep: 0,
    steps: [
      'Add domain',
      'Setup',
      'Verify',
    ],
  });

  const toggleModal = () => setState(draft => {
    draft.showModal = !draft.showModal;
  });

  const stepOneDone = (domain: string) => {
    setState(draft => {
      draft.currentStep = 1;
      draft.domain = domain;
    });
  };

  let currentStep;
  switch (localState.currentStep) {
    case 1:
      currentStep = (
        <p>Verify domain</p>
      );
      break;
    case 0:
    default:
      currentStep = (
        <StepOne
          next={ stepOneDone }
        />
      );
  }

  return (
    <>
      <Button variant='secondary' size='sm' onClick={ toggleModal }>
        <FontAwesomeIcon icon='plus' /> Add
      </Button>

      <Modal show={ localState.showModal } onHide={ toggleModal } size="lg" aria-labelledby="addDomainTitle">
        <Modal.Header className='bg-fade' closeButton>
          <Modal.Title id="addDomainTitle">
            <FontAwesomeIcon icon="at" /> Add Domain
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Wizard steps={ localState.steps } active={ localState.currentStep } />
        { currentStep }
        </Modal.Body>
      </Modal>
    </>
  );
};
