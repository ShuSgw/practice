import React from "react";

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
