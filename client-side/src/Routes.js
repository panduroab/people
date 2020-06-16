import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import PeopleView from './views/PeopleView';
import NotFoundView from './views/NotFoundView';

const Routes = () =>
  <Router>
    <div>
      <Switch>
        <Redirect exact={true} from="/" to="/people" />
        <Route exact={true} path="/people" component={PeopleView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </Router>;

export default Routes;