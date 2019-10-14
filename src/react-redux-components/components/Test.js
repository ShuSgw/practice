import React from "react";
import {connect} from "react-redux";

const Test = props => (
  <div>
    <h1>Test</h1>
    {console.log(props)}
  </div>
);
const ConnectedTest = connect(s => {
  return {conectedTest: s};
})(Test);
export default ConnectedTest;
