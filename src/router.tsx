import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import AdminLayout from 'sections/admin';
import AuthLayout from 'sections/auth';

export default () => (
  <Switch>
    <Route path="/admin" component={ AdminLayout } />
    <Route path="/auth" component={ AuthLayout } />
    <Redirect from="/" to="/auth" />
  </Switch>
);
