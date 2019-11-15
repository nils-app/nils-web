import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "sections/landing";
import Login from "sections/login";
import Dashboard from "sections/dashboard";
import AuthenticatedRoute from "util/AuthenticatedRoute";
import UnauthenticatedRoute from "util/UnauthenticatedRoute";
import useCheckLogin from "lib/checkAuth";
import OfflineCheck from "components/OfflineCheck";
import Footer from "components/Footer";

export default () => {
  useCheckLogin();

  return (
    <>
      <div className="app-content">
        <OfflineCheck />
        <Switch>
          <UnauthenticatedRoute path="/login" component={Login} />
          <AuthenticatedRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};
