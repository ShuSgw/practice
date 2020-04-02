import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import Sample from "./compoents/Sample";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Sample />
      </Provider>
    );
  }
}

export default App;
