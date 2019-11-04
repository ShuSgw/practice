export const plus = amount => ({type: "ADD", amount: amount});
export const minus = amount => ({type: "MIN", amount: amount});

export const syncPlus = amount => {
  //   return {type: "ADD", amount: amount};
  //   console.log("test");
  //   return d => {
  //     setTimeout(() => {
  //       d(plus(amount));
  //     }, 1000);
  //   };
  const promise = new Promise(() => {
    return {type: "ADD", amount: amount};
  });
  promise.then(function(data) {
    console.log(data.getFullYear());
  });
  return {type: "ADD", amount: amount};
};
