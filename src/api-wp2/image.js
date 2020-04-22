import React, { Component } from "react";
import axios from "axios";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      isLoaded: false,
    };
  }
  componentDidMount() {
    if (this.props.iamgeId > 0) {
      axios
        .get(`http://testsite.lo/wp-json/wp/v2/media/${this.props.iamgeId}`)
        .then((res) => {
          const imageURL = res.data.media_details.sizes.thumbnail.source_url;
          this.setState({
            imageURL: imageURL,
            isLoaded: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <img src={this.state.imageURL} alt={this.props.iamgeId} />
        </div>
      );
    }
    return null;
  }
}

export default Image;
