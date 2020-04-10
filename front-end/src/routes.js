import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/logon";
import NewIncident from "./pages/newIncident";
import Profile from "./pages/profile";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/todos-casos" component={Profile} />
      <Route path="/criar-novo" component={NewIncident} />
    </Switch>
  </BrowserRouter>
)
