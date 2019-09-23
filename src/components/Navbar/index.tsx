import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import Logo from "components/Logo";

import "./index.scss";

export default () => {
  return (
    <Navbar className='main' bg="light" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Logo /> Nils
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={NavLink} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            <FontAwesomeIcon icon="sign-in-alt" /> Login
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
