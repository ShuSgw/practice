const num = (s = 0, a) => {
  switch (a.type) {
    case "ADD":
      return s + a.amount;
    case "MIN":
      return s - a.amount;
    case "RESET":
      return s;
    default:
      return s;
  }
};

export default num;
