import React from "react";
import { Switch, Route } from "react-router-dom";

import { StateProvider } from "store/state";

import Landing from "sections/landing";
import Login from "sections/login";
import Dashboard from "sections/dashboard";

export default () => {
  return (
    <StateProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Landing} />
      </Switch>
    </StateProvider>
  );
};
