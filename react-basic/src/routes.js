import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HousePage from './pages/HousePage';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HousePage} />
    </Switch>
);

export default Routes;
