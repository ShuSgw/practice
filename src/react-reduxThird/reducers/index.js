import {combineReducers} from "redux";
import num from "./num";
import text from "./text";

const reducers = combineReducers({
  num,
  text
});

export default reducers;
