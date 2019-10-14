import React from "react";
import {connect} from "react-redux";

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
    <form
      onSubmit={e => {
        e.preventDefault();
        const textValue = e.target[0].value;
        props.dispatch({type: "FIND_NAME", filter: textValue});
        return props.conectedTest.combinedexpenseReducer.filter(expense => {
          return console.log(expense.text === textValue);
        });
      }}
    >
      <input type="text" />
      <button>Name Filter</button>
    </form>
    <ul>
      {props.conectedTest.combinedexpenseReducer.map((expense, num) => (
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
  return {conectedTest: s};
})(Test);
export default ConnectedTest;
