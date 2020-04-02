import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import Todos from "./compoents/Todos";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  }
}

export default App;
