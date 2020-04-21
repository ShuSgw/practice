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
    axios.get("http://testsite.lo/wp-json/wp/v2/posts/").then((res) => {
      console.log(res);
    });
  }

  render() {
    return <div>hello</div>;
  }
}

export default Lists;
