import React from "react";
import cuid from "cuid";
import { stateLists } from "./stateLists";
import Form from "./Form";
import List from "./List";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: stateLists,
      selectedList: false,
    };
  }
  handleListAdd = (stateFromForm) => {
    stateFromForm.id = cuid();
    this.setState((prevState) => ({
      lists: [...prevState.lists, stateFromForm],
    }));
  };
  handleListEdit = (list) => {
    this.setState(() => ({
      selectedList: list,
    }));
  };
  handleListDelete = (id) => {
    this.setState((prevState) => ({
      lists: prevState.lists.filter((list) => {
        if (list.id !== id) {
          return list;
        }
      }),
    }));
  };
  render() {
    const { lists, selectedList } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>List</h1>
        <Form selectedList={selectedList} handleListAdd={this.handleListAdd} />
        <List
          lists={lists}
          handleListDelete={this.handleListDelete}
          handleListEdit={this.handleListEdit}
        />
      </div>
    );
  }
}

export default Index;
