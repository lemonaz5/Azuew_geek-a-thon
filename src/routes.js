import React from 'react'
import { Route } from "react-router";
import { HashRouter, Switch } from 'react-router-dom';
import InterestPlace from "./InterestPlace";
import App from "./App"

const FallbackPage = (props) => (
  <div>This is FallbackPage </div>
)

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/interestplace" component={InterestPlace} />
      <Route path="*" component={FallbackPage} />
    </Switch>
  </HashRouter>
);
