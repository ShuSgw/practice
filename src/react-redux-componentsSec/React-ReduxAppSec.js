import React from "react";
// components
import Header from "./components/Header";
import Contents from "./components/Contents";
import LnkLoginPage from "./components/LoginPage";
import Edit from "./components/Edit";
import Sample from "./components/Sample";

// react-redux
import { Provider } from "react-redux";
// store
import { createStore, applyMiddleware, compose } from "redux";
//reducer
import reducers from "./reducers";
//router
import { Router, Route, Switch } from "react-router-dom";
// redux-thunk
import thunk from "redux-thunk";

// firebase
import firebase from "./firebase/firebase";

// action
import { setPostFromDB } from "./actions/index";
import { login, logout } from "./actions/auth";

// history
import { createBrowserHistory as createHistory } from "history";

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const ReactReduxApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={LnkLoginPage} exact={true} />
        <Route path="/dashboard" component={Contents} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/sample/" component={Sample} />
      </Switch>
    </Router>
  </Provider>
);

export default ReactReduxApp;

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(setPostFromDB());
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.uid);
    store.dispatch(login(user.uid));
    if (history.location.pathname === "/") {
      history.push("/dashboard");
      renderApp();
    }
  } else {
    store.dispatch(logout());
    history.push("/");
  }
});
