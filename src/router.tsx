import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'sections/dashboard'

export default () => {
    return (
        <Switch>
            <Route path='/' component={ Dashboard } />
        </Switch>
    );
};