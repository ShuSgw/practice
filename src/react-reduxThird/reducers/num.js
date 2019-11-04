const num = (s = 0, a) => {
  switch (a.type) {
    case "ADD":
      return s + a.amount;
    case "MIN":
      return s - a.amount;
    default:
      return s;
  }
};

export default num;
