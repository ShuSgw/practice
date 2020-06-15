import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const { lists } = props;
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {lists.map((list) => (
        <ListItem key={list.id} listArray={list} />
      ))}
    </div>
  );
};

export default List;
