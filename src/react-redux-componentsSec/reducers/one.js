import uuid from "uuid";
var threadNum = 1;
const reducerOne = (s = [], a) => {
  switch (a.type) {
    case "ADD_POST":
      return [
        ...s,
        {
          id: uuid(),
          name: a.name + threadNum++,
          text: a.text
        }
      ];
    case "EDIT_ESPENSE":
      return s.map(post => {
        if (post.id === a.id) {
          return {...post, name: a.name, text: a.text};
        } else {
          return post;
        }
      });

    case "REMOVE_EXPENSE":
      return s.filter(s => {
        return s.id !== a.id;
      });
    default:
      return s;
  }
};

export default reducerOne;
