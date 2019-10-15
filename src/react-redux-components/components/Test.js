import React from "react";
import {connect} from "react-redux";

const selector = (expenses, text) => {
  return expenses.filter(expense => {
    console.log(text);
    const textMatch = expense.text.includes(text.text);
    return textMatch;
  });
};

const Test = props => (
  <div>
    <button
      onClick={() => {
        props.dispatch({type: "ADD_EXPENSE", text: "hello world", num: 1});
      }}
    >
      Post1
    </button>
    <button
      onClick={() => {
        props.dispatch({type: "ADD_EXPENSE", text: "こんにちは", num: 2});
      }}
    >
      Post2
    </button>
    <button
      onClick={() => {
        props.dispatch({type: "ADD_EXPENSE", text: "さようなら", num: 3});
      }}
    >
      Post3
    </button>

    <button
      onClick={() => {
        props.dispatch({type: "FILTER_TEXT_HELLO", filter: "hello"});
      }}
    >
      Text 'hello'
    </button>
    <ul>
      {props.conectedTest.map((expense, num) => (
        <li key={num}>
          <p>{expense.text}</p>
          <p>{expense.id}</p>
          <p>{expense.number}</p>
          <button
            onClick={e => {
              e.preventDefault();
              props.dispatch({type: "REMOVE_EXPENSE", id: expense.id});
            }}
          >
            Remove
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              props.dispatch({
                type: "EDIT_EXPENSE",
                id: expense.id,
                text: "text"
              });
            }}
          >
            Change text
          </button>
        </li>
      ))}
    </ul>
  </div>
);
const ConnectedTest = connect(s => {
  console.log("新規");
  console.log(s.combinedexpenseReducer);
  // console.log(s.combinedfilterReducer.text);
  console.log(selector(s.combinedexpenseReducer, s.combinedfilterReducer));
  return {
    conectedTest: selector(s.combinedexpenseReducer, s.combinedfilterReducer)
  };
})(Test);
export default ConnectedTest;
