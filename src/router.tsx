import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from 'sections/landing'
import Login from 'sections/login'
import Dashboard from 'sections/dashboard'

export default () => {
    return (
        <Switch>
            <Route path='/login' component={ Login } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/' component={ Landing } />
        </Switch>
    );
};