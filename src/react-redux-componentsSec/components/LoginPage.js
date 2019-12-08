import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = props => (
  <div>
    <button onClick={props.startLogin}>Login</button>
  </div>
);

const LnkLoginPage = connect(undefined, d => ({
  startLogin: () => {
    d(startLogin());
  }
}))(LoginPage);

export default LnkLoginPage;
