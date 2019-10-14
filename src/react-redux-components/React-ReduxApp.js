import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ConnectedHeader from "./components/Header";
import ConnectedTest from "./components/Test";
import reducers from "./reducers";

const store = createStore(reducers);

const ReactReduxApp = () => (
  <Provider store={store}>
    <ConnectedHeader />
    <ConnectedTest />
  </Provider>
);

export default ReactReduxApp;
