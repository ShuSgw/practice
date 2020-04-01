import React, { Component } from "react";
import "../style.css";

let data = {
  title: "hello world",
  message: "this is corona virus"
};
export const SampleContext = React.createContext(data);

class Form extends Component {
  static contextType = SampleContext;

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onCheck = e => {
    console.log("error");
  };
  doChange = e => {
    console.log(this.props.maxLength);
  };

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <div>{this.context.title}</div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.doChange}
            required
            pattern="[A-Za-z _,.]+"
            maxLength="10"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
