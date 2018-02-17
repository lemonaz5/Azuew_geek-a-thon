import React from 'react'
import { Route } from "react-router";
import { HashRouter, Switch } from 'react-router-dom';
import InterestPlace from "./InterestPlace";
import App from "./App"

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route path="interestplace" component={InterestPlace} />
    </Switch>
  </HashRouter>
);
