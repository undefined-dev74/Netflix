import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';

import * as ROUTE from './Constants/routes';
export default function App() {
  return (
    <Router>
      <Route exact path="/Browse">
        <Browse />
      </Route>

      <Route exact path="/Signup">
        <Signup />
      </Route>
      <Route exact path="/Signin">
        <Signin />
      </Route>
      <Route exact path={ROUTE.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
