import React from "react";
import {connect} from "react-redux";
// actions
// import {stateOneChange} from "../actions/index";

const Edit = props => (
  <div>
    <h1>Edit</h1>
    <p>{props.allState.name}</p>
    <p>{props.match.params.id}</p>
  </div>
);

const LnkEdit = connect((s, props) => {
  return {
    allState: s.one.find(one => {
      return one.id === props.match.params.id;
    })
  };
})(Edit);

export default LnkEdit;
