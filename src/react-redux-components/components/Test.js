import React from "react";
import {connect} from "react-redux";

const Test = props => (
  <div>
    <button
      onClick={() => {
        props.dispatch({type: "ADD_EXPENSE"});
      }}
    >
      dispatch
    </button>
    <ul>
      {props.conectedTest.combinedexpenseReducer.map((expense, num) => (
        <li key={num}>
          {expense.id}
          <p>{expense.text}</p>
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
                text: "sample"
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
