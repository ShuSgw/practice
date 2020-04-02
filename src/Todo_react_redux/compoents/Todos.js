import React from "react";
import Todo from "./Todo";
import Form from "./Form";

const Todos = props => {
  return (
    <div>
      <Form />
      <ul>
        <Todo />
      </ul>
    </div>
  );
};

export default Todos;
