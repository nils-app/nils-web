import React from "react";
import { Image, Nav } from "react-bootstrap";

import Logo from './Logo';

export default () => {
  return (
    <div className='sidebar'>
      <h1 className='logo'>
        <Logo /> Nils
      </h1>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link active href="/home">Dashboard</Nav.Link>
        <Nav.Link eventKey="link-1">Settings</Nav.Link>
      </Nav>
    </div>
  );
};
