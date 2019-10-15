import React from "react";
import {connect} from "react-redux";
import {stateTWoChange} from "../actions/index";

const Header = props => (
  <div>
    <h1>header</h1>
    <h5>props.allState.(one.text, two.text)</h5>
    <h2>{props.allState.two}</h2>
    <button
      onClick={() => {
        props.dispatch(stateTWoChange());
      }}
    >
      state 2 change
    </button>
  </div>
);

const LnkHeader = connect(s => {
  return {allState: s};
})(Header);

export default LnkHeader;
