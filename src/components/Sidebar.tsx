import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './Logo';

export default () => {
  return (
    <div className='sidebar'>
      <h1 className='logo'>
        <Logo /> Nils
      </h1>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link active href="/home">
            <FontAwesomeIcon icon="columns" fixedWidth /> Dashboard
        </Nav.Link>
        <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon="cog" fixedWidth /> Settings
        </Nav.Link>
      </Nav>
      <hr/>
      <p className="text-center text-muted">
        &copy; Nils 2019
      </p>
    </div>
  );
};
