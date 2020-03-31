import React from "react";

const Another = props => {
  return (
    <div>
      <h1>Another</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Another;
