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
  return {
    type: "ADD_POST",
    name: name,
    text: text
  };
};
