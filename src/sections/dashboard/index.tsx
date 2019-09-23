import React from "react";
import { Switch, Route } from "react-router";
import {
  Row,
  Col,
} from "react-bootstrap";

import Sidebar from "./components/Sidebar";
import Main from './pages/index';
import Balance from './pages/balance';
import Payouts from './pages/payouts';
import Domains from './pages/domains';
import Settings from './pages/settings';

import './index.scss';

export default () => {
  return (
    <>
      <Row noGutters className='full-height'>
        <Col xs={ 0 } sm={ 2 } className='full-height sidebar-container'>
          <Sidebar />
        </Col>
        <Col xs={ 12 } sm={ 10 }>
          <Switch>
            <Route path="/dashboard/balance" component={ Balance } />
            <Route path="/dashboard/domains" component={ Domains } />
            <Route path="/dashboard/payouts" component={ Payouts } />
            <Route path="/dashboard/settings" component={ Settings } />
            <Route path="/dashboard/" component={ Main } />
          </Switch>
        </Col>
      </Row>
    </>
  );
};
