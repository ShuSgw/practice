import database from "../firebase/firebase";

export const filterTextChange = filterText => {
  return {type: "FILTER_TEXT_CHANGE", filterText: filterText};
};

export const editPosts = (id, name, text) => {
  return {
    type: "EDIT_ESPENSE",
    id: id,
    name: name,
    text: text
  };
};

export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const newPost = (name, text) => {
  const newPost = {name: name, post: text};
  database.ref("newPost").push(newPost);
  return {
    type: "ADD_POST",
    name: name,
    text: text
  };
};

export const newPostwithDatabase = (name, text) => {
  // database
  //   .ref()
  //   .once("value")
  //   .then(a => {
  //     console.log(a.val());
  //   });
  const newPost = {name: name, post: text};
  console.log(newPost);
  database.ref().push(newPost);
  // database
  //   .ref("post")
  //   .push(newPost)
  //   .then(ref => {
  //     dispatch(
  //       addExpense({
  //         id: ref.key,
  //         ...expense
  //       })
  //     );
  //   });
};
// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };

//     database.ref('expenses').push(expense).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };
