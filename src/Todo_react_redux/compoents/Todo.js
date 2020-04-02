import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

const Todo = ({ todo }) => {
  const todos = todo.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });
  return todos;
};

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
