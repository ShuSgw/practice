import React from "react";
import Option from "./Option";

class Options extends React.Component {
  render() {
    const options = this.props.options;
    return (
      <div>
        <button onClick={this.props.handleDelete}>Remove All</button>
        {options.map((option, num) => {
          return <Option key={num} option={option} />;
        })}
      </div>
    );
  }
}

export default Options;
