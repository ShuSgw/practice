import uuid from "uuid";

const expenseReducer = (s = [], a) => {
  switch (a.type) {
    case "ADD_EXPENSE":
      return [
        ...s,
        {
          id: uuid()
        }
      ];
    default:
      return s;
  }
};

export default expenseReducer;
