import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import "assets/scss/argon-dashboard-react.scss";
import Router from './router';

const app = (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));