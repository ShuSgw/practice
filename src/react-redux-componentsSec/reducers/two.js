const reducerSec = (s = "stateTow", a) => {
  switch (a.type) {
    case "STATE_TWO_CHANGE":
      return a.text;
    default:
      return s;
  }
};

export default reducerSec;
