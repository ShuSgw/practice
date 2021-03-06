import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const { lists, handleListDelete, handleListEdit } = props;
  return (
    <div>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          listArray={list}
          handleListDelete={handleListDelete}
          handleListEdit={handleListEdit}
        />
      ))}
    </div>
  );
};

export default List;
