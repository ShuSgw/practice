import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  doChange = e => {
    console.log("hello");
    // this.input = e.target.value;
    // console.log(e.target);
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.doChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
