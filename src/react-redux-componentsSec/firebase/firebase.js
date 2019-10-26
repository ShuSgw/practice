import * as firebase from "firebase/app";
import "firebase/database";

const config = {};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
