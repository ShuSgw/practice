import React, { Component } from "react";
import Another from "./Another";
import Form from "./Form";
import { SampleContext } from "./Form";

class App extends Component {
  static contextType = SampleContext;
  newdata = {
    title: "新しいタイトル",
    message: "これは新しいメッセージです。"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  sample() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <SampleContext.Provider value={this.newdata}></SampleContext.Provider>
        <div>{this.context.title}</div>
        <Another>コンポーネント内部</Another>
        <Form />
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <h1>Review React2020-03-05</h1>
//     </div>
//   );
// };
