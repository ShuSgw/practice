import uuid from "uuid";

const expenseReducer = (s = [], a) => {
  switch (a.type) {
    case "ADD_EXPENSE":
      return [
        ...s,
        {
          id: uuid(),
          text: a.text,
          number: a.num
        }
      ];
    case "REMOVE_EXPENSE":
      return s.filter(s => {
        return s.id !== a.id;
      });
    case "EDIT_EXPENSE":
      return s.map(s => {
        if (s.id === a.id) {
          return { ...s, text: a.text };
        } else {
          return { ...s };
        }
      });

    default:
      return s;
  }
};

export default expenseReducer;
