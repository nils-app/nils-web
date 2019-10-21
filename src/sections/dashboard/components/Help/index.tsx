import React, { useState } from "react";
import { Modal, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>
        <FontAwesomeIcon icon="question-circle" /> Help
      </NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-fade' closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon="question-circle" /> Help
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>I hope everything is going well with Nils <FontAwesomeIcon icon={['far', 'smile']} /></p>
          <p>In any case I'm here to help, please reach out to me directly at:</p>
          <p>
            <a href="mailto:help@nilsapp.com">help@nilsapp.com</a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
