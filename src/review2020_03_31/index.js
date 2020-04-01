import React from "react";

import Btn from "./Btn";
import Text from "./Text";
import { Provider } from "react-redux";

const initialState = {};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state };
    case "DEC":
      return { ...state };
    default:
      return state;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Provider>
          <Text />
          <Btn />
        </Provider>
      </div>
    );
  }
}

export default App;
