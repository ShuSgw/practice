import React, { Component } from "react";
import Another from "./Another";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
