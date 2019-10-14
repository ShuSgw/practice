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
      {props.conectedTest.combinedexpenseReducer.map(expense => (
        <li key={expense.id}>
          {expense.id}
          <button
            onClick={e => {
              e.preventDefault();
              props.dispatch({type: "REMOVE_EXPENSE", id: expense.id});
            }}
          >
            Remove
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
