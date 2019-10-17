import React from "react";
import {connect} from "react-redux";

class Edit extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      name: props.allState ? props.allState.name : "",
      text: props.allState ? props.allState.text : ""
    };
  }
  onNameChange = e => {
    this.setState(() => {
      return {name: e.target.value};
    });
  };
  onTextChange = e => {
    this.setState(() => {
      return {text: e.target.value};
    });
  };
  render() {
    return (
      <div>
        <h1>Edit</h1>
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
