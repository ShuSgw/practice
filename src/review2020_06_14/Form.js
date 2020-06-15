import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form style={{ textAlign: "center" }} autoComplete="off">
        <input type="text" />
      </form>
    );
  }
}

export default Form;
