import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "assets/scss/index.scss";

import loadIcons from "./lib/icons";
import Router from "./router";

loadIcons();

const app = (
  <BrowserRouter basename="/nils-web">
    <Router />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
