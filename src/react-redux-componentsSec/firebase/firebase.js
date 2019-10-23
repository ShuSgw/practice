import * as firebase from "firebase";

const config = {};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: "shu",
    age: 28
  });

// firebase
//   .database()
//   .ref("age")
//   .set(19);
// firebase
//   .database()
//   .ref("sample")
//   .set({sample: "sample"});
