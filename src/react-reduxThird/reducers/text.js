const text = (s = "sample text", a) => {
  switch (a.type) {
    case "CHANGE_TEXT":
      return "change";
    default:
      return s;
  }
};

export default text;
