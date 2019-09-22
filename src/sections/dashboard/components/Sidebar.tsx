import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Logo from './Logo';

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
    link: 'settings',
    text: 'Settings',
    icon: 'cog',
  },
];

export default () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <h1 className='logo'>
          <Logo /> Nils
        </h1>
        <hr/>
        <Nav defaultActiveKey="/dashboard/" className="flex-column">
          { sections.map(section => (
            <Nav.Link href={ `/dashboard/${section.link}` }>
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
