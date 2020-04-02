import { createStore } from "redux";

const initialState = {
  num: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { num: state.num + 1 };
    case "DEC":
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
