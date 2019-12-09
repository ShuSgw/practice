import React from "react";
import { connect } from "react-redux";

class Sample extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
const SampleEdit = connect(s => {
  return {
    allState: s
  };
})(Sample);

export default SampleEdit;
