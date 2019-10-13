import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

export default Header;
