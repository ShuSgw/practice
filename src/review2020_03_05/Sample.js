import React, { createContext, Component } from "react";

let data = { title: "title" };
const SampleContext = createContext(data);

class Text extends Component {
  static contextType = SampleContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.context.title}</div>;
  }
}

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  newdata = {
    title: "新しいタイトル"
  };
  render() {
    return (
      <div>
        <Text />
        <SampleContext.Provider value={this.newdata}>
          <Text />
        </SampleContext.Provider>
      </div>
    );
  }
}

export default Sample;
