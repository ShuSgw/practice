import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./compoents/App";

class MemoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default MemoApp;
