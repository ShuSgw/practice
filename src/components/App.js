import React from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import OptionModel from "./OptionModel";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      options: ["first", "second", "third"],
      selectedOption: undefined
    };
  }
  // normal function
  handleDelete() {
    this.setState(() => ({options: []}));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  };
  clearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  };
  // arrow function
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.setState(() => ({options: [...this.state.options, option]}));
    }
    e.target.elements.option.value = "";
  };
  render() {
    const title = "Indecison App";
    const subtitle = "practice React";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <Options
          options={this.state.options}
          handleDelete={() => {
            this.handleDelete();
          }}
        />
        <OptionModel
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default App;
