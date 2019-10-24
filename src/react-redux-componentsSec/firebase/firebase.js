import * as firebase from "firebase/app";
import "firebase/database";

const config = {};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: "shu",
    age: 28
  })
  .then(() => {
    console.log("ok");
  })
  .catch(e => {
    console.log("error", e);
  });

firebase
  .database()
  .ref("name")
  .remove()
  .then(function() {
    console.log("Remove succeeded.");
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message);
  });

firebase
  .database()
  .ref()
  .update({name: "hello"});

firebase
  .database()
  .ref("name")
  .once("value")
  .then(data => {
    console.log(data.val());
  })
  .catch(e => {
    console.log("error");
  });

// firebase
//   .database()
//   .ref("age")
//   .set(19);
// firebase
//   .database()
//   .ref("sample")
//   .set({sample: "sample"});
