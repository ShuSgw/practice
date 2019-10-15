import React from "react";
import {connect} from "react-redux";
import {filterTextChange} from "../actions/index";
import {NavLink} from "react-router-dom";

const Header = props => (
  <div>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <h1>Simple Forum</h1>
    </NavLink>
    <input
      type="text"
      value={props.allState.two.filter}
      placeholder="Serach"
      onChange={e => {
        props.dispatch(filterTextChange(e.target.value));
      }}
    />
  </div>
);

const LnkHeader = connect(s => {
  return {allState: s};
})(Header);

export default LnkHeader;
