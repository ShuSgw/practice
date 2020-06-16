import React from "react";

const ListItems = (props) => {
  const { title, id } = props.listArray;
  const { handleListDelete } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <p>{title}</p>
      <button>Edit</button>
      <button
        onClick={() => {
          handleListDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItems;
