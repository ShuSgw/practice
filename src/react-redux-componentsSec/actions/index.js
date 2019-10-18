export const stateOneChange = () => {
  return {type: "STATE_ONE_CHANGE"};
};
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
