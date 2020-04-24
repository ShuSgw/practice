import React, { Component } from "react";

class Reduce extends Component {
  componentDidMount() {
    console.log();
    var numbers = [10, 20, 30];

    var result = numbers.reduce((initial, eachNum) => {
      return initial + eachNum;
    }, 0);
    console.log(result);
    // reduce(コールバック, 初期値)

    var balancedParens = (string) => {
      return !string.split("").reduce((pre, char) => {
        if (pre > 0) {
          return pre;
        }
        if (char === "(") {
          return pre + 1;
        }
        if (char === ")") {
          return pre - 1;
        }
      }, 0);
    };

    console.log(balancedParens("()"));
  }
  render() {
    return <li>Reduce</li>;
  }
}

export default Reduce;
