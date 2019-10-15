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
    case "FILTER_TEXT_HELLO":
      return {...s, text: a.filter};
    default:
      return s;
  }
};

export default filterReducer;

// store.dispatch(('water')={
//   type: 'FIND_NAME',
//   text: text
// });

// const filtersReducerDefaultState = {
// text: "water",
// sortby: "date",
// startDate: undefined,
// endDate: undefined
// };

// export default (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'FIND_NAME':
//       return {
//         ...state,
//         text: action.text
//       };
//   }
// };

// selectExpenses (expenses, textFilter) => {
//   return expenses.filter((expense) => {
//     const textMatch = expense.text.includes(text);
//     return textMatch;
//   })
// };

// const mapStateToProps = (state) => {
//   return {
//     expenses: selectExpenses(state.expenses, state.filters)
//   };
// };

// export default connect(mapStateToProps)(ExpenseList);
