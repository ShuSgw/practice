import React from "react";
import {connect} from "react-redux";

const Header = props => (
  <div>
    <h1>header</h1>
  </div>
);
const ConnectedHeader = connect(s => {
  return {conectedHeader: s};
})(Header);
export default ConnectedHeader;
