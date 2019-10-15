import React from "react";
import {connect} from "react-redux";
// actions
import {stateOneChange} from "../actions/index";

const Contents = props => (
  <div>
    <p>Contents</p>
    <button
      onClick={() => {
        props.dispatch(stateOneChange());
      }}
    >
      Post
    </button>
    {props.allState.one.map((one, num) => (
      <ul key={num}>
        <li>Name: {one.name}</li>
        <li>Text: {one.text}</li>
        <li>id: {one.id}</li>
      </ul>
    ))}
  </div>
);

const LnkContents = connect(s => {
  return {allState: s};
})(Contents);

export default LnkContents;
