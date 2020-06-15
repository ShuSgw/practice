import React from "react";

const ListItems = (props) => {
  const { title } = props.listArray;
  return <button>{title}</button>;
};

export default ListItems;
