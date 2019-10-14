const filterReducer = (
  s = {
    text: "",
    sortby: "date",
    startDate: undefined,
    endDate: undefined
  },
  a
) => {
  switch (a.type) {
    case "FIND_NAME":
      return {...s, text: a.filter};
    default:
      return s;
  }
};

export default filterReducer;

// SET_TEXT_FILTER
// store.dispatch((text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text: text
// }));

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   });
// };
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });
