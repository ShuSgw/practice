import uuid from "uuid";
var threadNum = 1;
const reducerOne = (s = [], a) => {
  switch (a.type) {
    case "STATE_ONE_CHANGE":
      return [
        ...s,
        {
          id: uuid(),
          name: "名前" + threadNum++,
          text: "サンプルテキスト"
        }
      ];
    default:
      return s;
  }
};

export default reducerOne;
