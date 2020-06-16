import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    if (this.props.selectList !== null) {
      this.setState(() => ({ ...this.props.selectList }));
    }
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  hendleSubmit = (e) => {
    e.preventDefault();
    const { handleListAdd } = this.props;
    handleListAdd(this.state);
  };
  render() {
    const { title } = this.state;
    return (
      <form
        onSubmit={this.hendleSubmit}
        style={{ textAlign: "center" }}
        autoComplete="off"
      >
        <input
          name="title"
          onChange={this.handleInput}
          type="text"
          value={title}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
