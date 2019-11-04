import React from "react";
// components
import Header from "./components/Header";
import Contents from "./components/Contents";

// react-redux
import {Provider} from "react-redux";
// store
import {createStore /*applyMiddleware*/} from "redux";
//reducer
import reducers from "./reducers";
//router
// redux-thunk
// import thunk from "redux-thunk";

const store = createStore(
  reducers
  // applyMiddleware(thunk)
);

const ReactReduxAppThird = () => (
  <Provider store={store}>
    <Header />
    <Contents />
  </Provider>
);

export default ReactReduxAppThird;
