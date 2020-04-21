import React, { Component } from "react";
import axios from "axios";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://itunes.apple.com/search?term=緑黄色社会?lang=en_us")
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return <ul>no</ul>;
  }
}

export default Lists;
