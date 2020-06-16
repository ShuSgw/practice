import React from "react";

const ListItems = (props) => {
  const { listArray } = props;
  const { handleListDelete, handleListEdit } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <p>{listArray.title}</p>
      <button
        onClick={() => {
          handleListEdit(listArray);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          handleListDelete(listArray.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItems;
