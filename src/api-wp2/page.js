import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {},
      isLoaded: false,
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://testsite.lo/wp-json/wp/v2/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          contents: res.data,
          isLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { contents, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>{contents.title.rendered}</h1>
          <Link to="/">Home</Link>
          <div
            dangerouslySetInnerHTML={{ __html: contents.content.rendered }}
          />
        </div>
      );
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </div>
    );
  }
}

export default Page;
