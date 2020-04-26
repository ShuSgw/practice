import React, { useState } from "react";

const UserState = (props) => {
  const [a, b] = useState(props.count);
  const [c, d] = useState("blank");

  const [state, dispach] = useState({
    count: UserState.defaultProps.count,
    text: "normal",
  });
  console.log(props);
  return (
    <div>
      <h1>Hooks</h1>
      <div>{a}</div>
      <button onClick={() => b(a - 1)}>-1</button>
      <button onClick={() => b(a + 1)}>+1</button>
      <button onClick={() => b(UserState.defaultProps.count)}>Reset</button>
      <div>{c}</div>
      <input
        value={c}
        onChange={(e) => {
          d(e.target.value);
        }}
      />
      <br />
      <br />
      <h1>hooks with arranged state and dispach</h1>
      <div>{state.count}</div>
      <button onClick={() => dispach({ count: state.count - 1 })}>-1</button>
      <button onClick={() => dispach({ count: state.count + 1 })}>+1</button>
      <button onClick={() => dispach(UserState.defaultProps)}>Reset</button>
      <br />
      <div>{state.text}</div>
      <input
        value={state.text}
        onChange={(e) => {
          dispach({ text: e.target.value });
        }}
      />
    </div>
  );
};
UserState.defaultProps = {
  count: 0,
};
export default UserState;
