import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import './index.scss';

type Section = {
  link: string,
  text: string,
  icon: IconProp,
};

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
  {
    link: 'settings',
    text: 'Settings',
    icon: 'cog',
  },
];

export default () => {
  return (
    <div className='sidebar dark'>
      <div className="top">
        <h1 className='logo'>
          <Logo />
        </h1>
        <Nav defaultActiveKey="/dashboard/" className="flex-column">
          { sections.map(section => (
            <Nav.Link
              as={ NavLink }
              to={ `/dashboard/${section.link}` }
              key={ section.link }
              exact
            >
                <FontAwesomeIcon icon={ section.icon } fixedWidth /> {section.text}
            </Nav.Link>
          )) }
        </Nav>
      </div>
      <div className="bottom">
        <hr/>
        <p className="text-center text-muted">
          &copy; Nils 2019
        </p>
      </div>
    </div>
  );
};
