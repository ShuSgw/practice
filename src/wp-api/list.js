import React, { Component } from "react";
import axios from "axios";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: "aaaa",
        },
      ],
    };
  }
  componentDidMount() {
    axios.get("http://testsite.lo//wp-json/wp/v2/posts").then((res) => {
      console.log(res);
      this.setState({
        posts: [{}],
      });
    });
  }

  render() {
    const posts = this.state.posts.map((a, b) => <li key={b}>{a.id}</li>);
    return <ul>{posts}</ul>;
  }
}

export default Lists;
