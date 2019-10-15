export const stateOneChange = () => {
  return {type: "STATE_ONE_CHANGE"};
};
export const filterTextChange = filterText => {
  return {type: "FILTER_TEXT_CHANGE", filterText: filterText};
};
