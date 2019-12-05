import { database } from "../firebase/firebase";
import uuid from "uuid";

export const filterTextChange = filterText => {
  return { type: "FILTER_TEXT_CHANGE", filterText: filterText };
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
    id: uuid(),
    name: name,
    text: text
  };
};

// from here, actions for DB connection
export const newPostWithDB = (name, text) => {
  return d => {
    database
      .ref()
      .push({
        name: name,
        text: text
      })
      .then(ref => {
        d({
          type: "ADD_POST",
          id: ref.key,
          name: name,
          text: text
        });
      });
  };
};

export const setExpenses = postData => ({
  type: "SET_EXPENSES",
  postData
  //  [Object, Object, Object, Object, Object]
  //
});

export const setPostFromDB = () => {
  return d => {
    return database
      .ref()
      .once("value")
      .then(snaps => {
        const test = [];
        snaps.forEach(snap => {
          test.push({
            id: snap.key,
            ...snap.val()
          });
        });
        d(setExpenses(test));
      });
  };
};
