import * as firebase from "firebase/app";
import "firebase/database";
import {kStringMaxLength} from "buffer";

const config = {};

firebase.initializeApp(config);

const database = firebase.database();

// set
// database
//   .ref()
//   .set({
//     name: "shu",
//     age: "27",
//     location: {
//       city: "fuk",
//       country: "JPN"
//     }
//   })
//   .then(() => {
//     console.log("ok");
//   })
//   .catch(e => {
//     console.log("faild", e);
//   });
// // set change
// database.ref("age").set("22");
// // nested obj
// database.ref("location/city").set("Vancouver");

// remove
// ref(propertyName))
// if ref is black remove method delete all data
// database
//   .ref("location")
//   .remove()
//   .then(() => {
//     console.log("removed");
//   })
//   .catch(() => {
//     console.log("failed to remove");
//   });

// update
// database.ref().update({
//   jpb: "back-end"
// });
// database.ref().update({
//   "location/city": "Seatle"
// });
// Without root propaties need to
// be used 'something/something' to update

// to receive
// database
//   .ref("age")
//   // can choose which propaty u want to apply
//   .once("value")
//   // once is promise
//   .then(snap => {
//     console.log(snap.val());
//   })
//   .catch(e => {
//     console.log("error", e);
//   });

// google docで共同作業中にonメソッドの場合自動反映される
// database
//   .ref("age")
//   // can choose which propaty u want to apply
//   .on("value", snap => {
//     console.log(snap.val());
//   });

// database.ref().off();
// その後のリスナーすべて消去

// to make original key for each object
// database.ref().push({
//   name: "takeshi",
//   age: "33"
// });
// database.ref().push({
//   name: "soma",
//   age: "29"
// });

// to put data into array with original key
database
  .ref()
  .once("value")
  .then(snap => {
    // const spansArray = [];
    snap.forEach(singleSnap => {
      console.log(singleSnap.key);
    });
  });
