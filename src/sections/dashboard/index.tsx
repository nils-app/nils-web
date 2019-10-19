import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import {
  Row,
  Col,
} from "react-bootstrap";
import Helmet from "react-helmet";

import { useStateValue } from "store/state";
import useFetch from "util/fetch";

import Sidebar from "./components/Sidebar";
import Main from './pages/index';
import Balance from './pages/balance';
import Payouts from './pages/payouts';
import Domains from './pages/domains';
import Settings from './pages/settings';

import './index.scss';

export default () => {
  const { dispatch } = useStateValue();

  // Fetch newer data
  const [, balance,] = useFetch<any>(
    '/users/balance',
    'GET',
  );
  useEffect(() => {
    if (balance) {
      dispatch({
        type: 'balance',
        payload: balance,
      })
    }
  }, [balance, dispatch]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Row noGutters className='full-height'>
        <Col xs={ 0 } sm={ 3 } lg={ 2 } className='full-height sidebar-container'>
          <Sidebar />
        </Col>
        <Col xs={ 12 } sm={ 9 } lg={ 10 }>
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
