import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Listing from "./Containers/Listing"

const history = createBrowserHistory({basename: '/'});
function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/(|home)" render={() => <Listing/>}/>
            </Switch>
        </Router>
    );
}

export default Routes;