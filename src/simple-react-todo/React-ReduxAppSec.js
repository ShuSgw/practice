import React from "react";
// components
// import Header from "./components/Header";
// import Contents from "./components/Contents";
// import Edit from "./components/Edit";
// import Sample from "./components/Sample";

// react-redux
import { Provider } from "react-redux";
// store
import { createStore, applyMiddleware } from "redux";
//reducer
import reducers from "./reducers";
// redux-thunk
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const ReactReduxTodo = () => (
  <Provider store={store}>
    <div></div>
  </Provider>
);

export default ReactReduxTodo;
