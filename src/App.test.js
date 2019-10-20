const add = (a, b) => {
  return a + b + 1;
};

test("ok", () => {
  const result = add(3, 4);
  if (result !== 7) {
    throw new Error(`boy its ${result}`);
  }
});
