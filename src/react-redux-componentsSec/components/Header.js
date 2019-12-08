import React from "react";
import { connect } from "react-redux";
import { filterTextChange } from "../actions/index";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

const Header = props => (
  <div>
    <button onClick={props.startLogout}>Logout</button>
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
    <br />
    <br />
  </div>
);

const LnkHeader = connect(
  s => {
    return { allState: s };
  },
  d => ({
    startLogout: () => {
      d(startLogout());
    }
  })
)(Header);

export default LnkHeader;
