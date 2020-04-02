import React from "react";
import Add from "./Add";
import Delete from "./Delete";
import Find from "./Find";
import Item from "./Item";

const App = props => {
  return (
    <div>
      <Add />
      <Delete />
      <Find />
      <Item />
    </div>
  );
};

export default App;
