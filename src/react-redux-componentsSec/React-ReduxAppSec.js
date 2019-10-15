import React from "react";
// components
// import Header from "./components/Header";
import Contents from "./components/Contents";
// react-redux
import {Provider} from "react-redux";
// store
import {createStore} from "redux";
//reducer
import reducers from "./reducers";

const store = createStore(reducers);

const ReactReduxApp = () => (
  <Provider store={store}>
    {/*<Header />*/}
    <Contents />
  </Provider>
);

export default ReactReduxApp;
