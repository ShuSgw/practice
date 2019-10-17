import React from "react";
import {connect} from "react-redux";

class Sample extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>helo</h1>
        {console.log(this.props)}
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
