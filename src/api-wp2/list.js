import React, { Component } from "react";
import axios from "axios";
import Image from "./image";
import { Link } from "react-router-dom";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://testsite.lo/wp-json/wp/v2/posts/?per_page=50")
      .then((res) => {
        this.setState({
          posts: res.data,
          isLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { isLoaded, posts } = this.state;
    if (isLoaded) {
      const lists = posts.map((list, key) => (
        <li key={key}>
          <h4>{list.title.rendered}</h4>
          <Image iamgeId={list.featured_media} />
          <div dangerouslySetInnerHTML={{ __html: list.excerpt.rendered }} />
          <Link to={`/post/${list.id}`}>See this page</Link>
        </li>
      ));
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>キタコレ</h1>
          <ul>{lists}</ul>
        </div>
      );
    }
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
}

export default Lists;
