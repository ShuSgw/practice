import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState1 = {
  todos: ["sample1", "sample2", "sample3"],
};
const reducer1 = (state = initialState1, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.text] };
    case "DEC":
      return { num: state.num - 1 };
    default:
      return state;
  }
};
const initialState2 = {
  todos: ["text1", "text2", "text3"],
};
const reducer2 = (state = initialState1, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.text] };
    case "DEC":
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer1, applyMiddleware(...[thunk]));
