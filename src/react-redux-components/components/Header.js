import React from "react";
import {connect} from "react-redux";

const Header = props => (
  <div>
    <h1>header</h1>
    <button
      onClick={() => {
        props.dispatch({type: "ADD_EXPENSE"});
      }}
    >
      dispatch
    </button>
    <ul>
      {props.conectedHeader.combinedexpenseReducer.map((expense, num) => (
        <li key={num}>{expense.id}</li>
      ))}
    </ul>
  </div>
);
const ConnectedHeader = connect(s => {
  return {conectedHeader: s};
})(Header);
export default ConnectedHeader;
