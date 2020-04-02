import { createStore } from "redux";

const initialState = {
  todos: ["sample1", "sample2", "sample3"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.text] };
    case "DEC":
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
