import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigator from './views/pages/Navigator'
import Home from './views/pages/Home'
import NotFound from './views/pages/NotFound'

export default function App() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/404" component={NotFound} />
                <Route path="/:lang/:path*" component={Navigator} />
            </Switch>
        </Router>
    );
}