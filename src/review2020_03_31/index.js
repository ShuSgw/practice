import React from "react";

import Btn from "./Btn";
import Text from "./Text";
import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState = {
  num: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { num: state.num + 1 };
    case "DEC":
      return { num: state.num - 1 };
    default:
      return state;
  }
};

const store = createStore(counter);
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Text />
          <Btn />
        </Provider>
      </div>
    );
  }
}

export default App;
