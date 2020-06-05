import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [state, setstate] = useState(0);
  const [loading, loadingFunc] = useState(false);

  useEffect(() => {
    document.title = state;
    console.log("use effect");
    loadingFunc(true);
  });

  const pul = () => {
    setstate(state + 1);
  };
  const min = () => {
    setstate(state - 1);
  };
  return !loading ? (
    <div>
      <h1>Loading..{console.log("first")}</h1>
    </div>
  ) : (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>useEffect</h1>
        <p>{state}</p>
        <button onClick={pul}>+</button>
        <button onClick={min}>-</button>
        {console.log("second")}
      </div>
    </div>
  );
};

export default UseEffect;
