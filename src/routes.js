import React from 'react'
import { Route,Router } from "react-router";
import InterestPlace from "./InterestPlace";
import App from "./App"

export default (
  <Router path="/" component={App}>
    {/* <IndexRoute component={} /> */}
    <Route path="interestplace" component={InterestPlace} />
  </Router>
);
