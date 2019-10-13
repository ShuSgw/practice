import React from "react";
import Header from "./Header";
import Links from "./Links";
import Sample from "./Sample";
import Test from "./Test";
import NotFound from "./NotFound";

import {BrowserRouter, Route, Switch} from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Sample} exact={true} />
      <Route path="/link" component={Links} />
      <Route path="/test" component={Test} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
