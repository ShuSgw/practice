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
    case "REMOVE_EXPENSE":
      return s.filter(s => {
        return s.id !== a.id;
      });
    default:
      return s;
  }
};

export default expenseReducer;
