import React from "react";
// components
import Header from "./components/Header";
import Contents from "./components/Contents";
import Edit from "./components/Edit";
// react-redux
import {Provider} from "react-redux";
// store
import {createStore} from "redux";
//reducer
import reducers from "./reducers";
//router
import {BrowserRouter, Route, Switch} from "react-router-dom";

const store = createStore(reducers);

const ReactReduxApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Contents} exact={true} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default ReactReduxApp;
