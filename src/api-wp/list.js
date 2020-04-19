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
      .get("https://www.fran-shushoku.com/wp-json/wp/v2/posts/?per_page=100")
      .then((res) => {
        console.log(res);
        const data = res.data.map((data) => data);
        this.setState({ users: data });
        console.log(this.state);
      });
  }

  render() {
    const lists = this.state.users.map((list, key) => (
      <li key={key}>{list.title.rendered}</li>
    ));
    return <ul>{lists}</ul>;
  }
}

export default Lists;
