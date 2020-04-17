import React, { useState } from "react";

const Index = (props) => {
  const [a, b] = useState(props.count);
  console.log(props);
  return (
    <div>
      <h1>Hooks</h1>
      <div>{a}</div>
      <button onClick={() => b(a - 1)}>-1</button>
      <button onClick={() => b(a + 1)}>+1</button>
      <button onClick={() => b(Index.defaultProps.count)}>Reset</button>
    </div>
  );
};
Index.defaultProps = {
  count: 0,
};
export default Index;
