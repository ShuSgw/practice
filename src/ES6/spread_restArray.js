import React, { useEffect } from "react";
const Spread_RestArray = (pre) => {
  useEffect(() => {
    const array1 = [1, 2];
    const array2 = [3, 4];

    function join(array1, array2) {
      return array1.concat(array2);
    }
    // console.log(join(array1, array2));

    function join2(array1, array2) {
      const arr3 = [...array1, ...array2];
      return arr3;
    }
    // console.log(join2(array1, array2));
  });

  console.log("ここから");
  const array = [1, 2];
  function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }
  console.log(unshift(array, 1, 2, 3, 4, 5));

  function unshift2(array, ...spred) {
    const arr3 = [...spred, ...array];
    return arr3;
  }
  console.log(unshift2(array, 1, 2, 3, 4, 5));

  return (
    <div>
      <h1>Spread and Rest 演算子</h1>
    </div>
  );
};

export default Spread_RestArray;
