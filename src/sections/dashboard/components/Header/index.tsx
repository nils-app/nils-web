import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { API_URL } from '../../../../constants';
import Help from '../Help';
import './index.scss';
import Logo from "components/Logo";
import { useStateValue } from "store/state";

type Props = {
};

type Section = {
  link: string,
  text: string,
  icon: IconProp,
};

export default (props: Props) => {
  const { state } = useStateValue();

  const sections: Section[] = [
    {
      link: '',
      text: 'Dashboard',
      icon: 'columns',
    },
    {
      link: 'balance',
      text: 'Balance history',
      icon: 'coins',
    },
    {
      link: 'domains',
      text: 'Domains',
      icon: 'at',
    },
    {
      link: 'payouts',
      text: 'Payouts',
      icon: 'credit-card',
    },
  ];

  if (state.domains.length < 1) {
    sections.splice(0, 2);
  }

  return (
    <Row className='header'>
      <Col>
        <Navbar bg="transparent" variant="dark" expand="md">
          <Navbar.Brand as={NavLink} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav defaultActiveKey="/dashboard/" className="mr-auto">
              { sections.map(section => (
                <Nav.Link
                  as={ NavLink }
                  to={ `/dashboard/${section.link}` }
                  key={ section.link }
                  exact
                >
                    {section.text}
                </Nav.Link>
              )) }
            </Nav>
            <Nav>
              <Help />
              <Nav.Link href={ `${API_URL}/users/logout` }>
                <FontAwesomeIcon icon="sign-out-alt" /> Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
