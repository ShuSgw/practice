import React from "react";
import { connect } from "react-redux";
// import { editPosts } from "../actions/index";
import { databaseEditPosts } from "../actions/index";

class Edit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.allState ? props.allState.name : "",
      text: props.allState ? props.allState.text : ""
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => {
      return { name: name };
    });
  };
  onTextChange = e => {
    const text = e.target.value;
    this.setState(() => {
      return { text: text };
    });
  };
  render() {
    return (
      <div>
        <h1>Edit</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.dispatch(
              databaseEditPosts(
                this.props.allState.id,
                this.state.name,
                this.state.text
              )
            );
            this.props.history.push("/");
          }}
        >
          <input
            type="text"
            onChange={this.onNameChange}
            defaultValue={this.state.name}
          />
          <input
            type="text"
            onChange={this.onTextChange}
            defaultValue={this.state.text}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const LnkEdit = connect((s, props) => {
  return {
    allState: s.one.find(one => {
      return one.id === props.match.params.id;
    })
  };
})(Edit);

export default LnkEdit;
