const filterReducer = (
  s = {
    text: "sampleText",
    sortby: "date",
    startDate: undefined,
    endDate: undefined
  },
  a
) => {
  switch (a.type) {
    default:
      return s;
  }
};

export default filterReducer;
