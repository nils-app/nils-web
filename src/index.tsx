import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "assets/scss/index.scss";

import loadIcons from "./lib/icons";
import Router from "./router";
import Helmet from "react-helmet";

loadIcons();

const app = (
  <BrowserRouter basename={process.env.REACT_APP_BASEPATH}>
    <Helmet
      titleTemplate='%s | Nils'
    />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
