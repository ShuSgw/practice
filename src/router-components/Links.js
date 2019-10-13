import React from "react";

class Links extends React.Component {
  render() {
    return (
      <div>
        <h1>Link</h1>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Links;
