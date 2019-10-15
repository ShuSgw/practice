const reducerSec = (s = {filter: ""}, a) => {
  switch (a.type) {
    case "FILTER_TEXT_CHANGE":
      return {...s, filter: a.filterText};
    default:
      return s;
  }
};

export default reducerSec;
