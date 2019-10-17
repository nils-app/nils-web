import React from "react";
import { Switch, Route } from "react-router-dom";

import { StateProvider } from "store/state";

import Landing from "sections/landing";
import Login from "sections/login";
import Dashboard from "sections/dashboard";
import AuthenticatedRoute from "util/AuthenticatedRoute";
import UnauthenticatedRoute from "util/UnauthenticatedRoute";

export default () => {
  return (
    <StateProvider>
      <Switch>
        <UnauthenticatedRoute path="/login" component={Login} />
        <AuthenticatedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={Landing} />
      </Switch>
    </StateProvider>
  );
};
