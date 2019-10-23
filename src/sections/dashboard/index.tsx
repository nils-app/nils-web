import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import Helmet from "react-helmet";

import { useStateValue } from "store/state";
import useFetch from "util/fetch";

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
  const [, payouts,] = useFetch<any>(
    '/payouts',
    'GET',
  );
  useEffect(() => {
    if (balance) {
      dispatch({
        type: 'balance',
        payload: balance,
      })
    }
    if (payouts) {
      dispatch({
        type: 'payouts',
        payload: payouts,
      })
    }
  }, [balance, payouts, dispatch]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Switch>
        <Route path="/dashboard/balance" component={ Balance } />
        <Route path="/dashboard/domains" component={ Domains } />
        <Route path="/dashboard/payouts" component={ Payouts } />
        <Route path="/dashboard/settings" component={ Settings } />
        <Route path="/dashboard/" component={ Main } />
      </Switch>
    </>
  );
};
