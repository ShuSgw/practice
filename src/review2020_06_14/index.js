import React from "react";
import { stateLists } from "./stateLists";
import Form from "./Form";
import List from "./List";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: stateLists,
    };
  }
  render() {
    const { lists } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>List</h1>
        <Form />
        <br />
        <List lists={lists} />
      </div>
    );
  }
}

export default Index;
