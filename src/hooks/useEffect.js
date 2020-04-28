import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [state, setstate] = useState(0);

  useEffect(() => {
    console.log("hello world");
    document.title = state;
  });

  const pul = () => {
    setstate(state + 1);
  };
  const min = () => {
    setstate(state - 1);
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>useEffect</h1>
        <p>{state}</p>
        <button onClick={pul}>+</button>
        <button onClick={min}>-</button>
      </div>
    </div>
  );
};

export default UseEffect;
