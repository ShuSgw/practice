import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var names = ["けん", "はなこ", "そういちろう"];
    const every = names.every((name) => {
      return name.length >= 3;
    });
    console.log(every);

    const some = names.some((name) => {
      return name.length >= 3;
    });
    console.log(some);
  }

  render() {
    return (
      <div>
        <h1>ES6 Practice</h1>
      </div>
    );
  }
}

export default Index;
