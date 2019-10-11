import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './user/Signin';
import Signup from './user/Signup';
import Home from './core/Home';
import Nav from './components/nav';

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/signin" exact={true} component={Signin} />
                <Route path="/signup" exact={true} component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
