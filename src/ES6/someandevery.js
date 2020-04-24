import React, { Component } from "react";

class SomeAndEvery extends Component {
  componentDidMount() {
    var names = ["けん", "はなこ", "そういちろう"];
    //   すべてがtrue = true
    const every = names.every((name) => {
      return name.length >= 3;
    });
    console.log(every);
    //   １つでもtrue = true
    const some = names.some((name) => {
      return name.length >= 3;
    });
    console.log(some);
  }
  render() {
    return <li>Some and Every</li>;
  }
}

export default SomeAndEvery;
