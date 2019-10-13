import React from "react";

class Option extends React.Component {
  sample() {
    console.log(this.props.option);
  }
  render() {
    return (
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}

export default Option;
