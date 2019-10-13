import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/test" activeClassName="is-active">
          Test
        </NavLink>
        <NavLink to="/link" activeClassName="is-active">
          Link
        </NavLink>
      </div>
    );
  }
}

export default Header;
