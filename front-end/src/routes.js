import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/logon";
import NewIncident from "./pages/newIncident";
import Registered from "./pages/registered";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/todos-casos" component={Registered} />
      <Route path="/criar-novo" component={NewIncident} />
    </Switch>
  </BrowserRouter>
)
