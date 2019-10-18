import React from "react";
import {connect} from "react-redux";

class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      text: ""
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => {
      return {name: name};
    });
  };
  onTextChange = e => {
    const text = e.target.value;
    this.setState(() => {
      return {text: text};
    });
  };
  render() {
    return (
      <div>
        <h1>Post</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.dispatch({
              type: "ADD_POST",
              name: this.state.name,
              text: this.state.text
            });
            this.setState({name: ""});
          }}
        >
          <label>Name:</label>
          <br />
          <input
            type="text"
            onChange={this.onNameChange}
            defaultValue={this.state.name}
          />
          <br />
          <label>Text:</label>
          <br />
          <input
            type="text"
            onChange={this.onTextChange}
            defaultValue={this.state.text}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const LnkPost = connect((s, props) => {
  return {
    allState: s
  };
})(Post);

export default LnkPost;
