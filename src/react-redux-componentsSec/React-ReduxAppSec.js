import React from "react";
// components
import Header from "./components/Header";
import Contents from "./components/Contents";
import Edit from "./components/Edit";
import Sample from "./components/Sample";

// react-redux
import {Provider} from "react-redux";
// store
import {createStore, applyMiddleware} from "redux";
//reducer
import reducers from "./reducers";
//router
import {BrowserRouter, Route, Switch} from "react-router-dom";
// redux-thunk
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
);

const ReactReduxApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Contents} exact={true} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/sample/" component={Sample} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default ReactReduxApp;
