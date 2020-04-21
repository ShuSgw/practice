import React, { Component } from "react";
import axios from "axios";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: "" };
  }
  componentDidMount() {
    if (this.props.iamgeId > 0) {
      axios
        .get(`http://testsite.lo/wp-json/wp/v2/media/${this.props.iamgeId}`)
        .then((res) => {
          const imageURL = res.data.media_details.sizes.thumbnail.source_url;
          this.setState({
            imageURL: imageURL,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.imageURL} alt={this.props.iamgeId} />
      </div>
    );
  }
}

export default Image;
