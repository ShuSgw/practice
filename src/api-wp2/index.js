import React from "react";
import Lists from "./list";
import Page from "./page";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Index = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Lists} />
      <Route exact path="/post/:id" component={Page} />
    </Router>
  );
};

export default Index;
