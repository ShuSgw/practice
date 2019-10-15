import {combineReducers} from "redux";
import reducerOne from "./one";
import reducerSec from "./two";

const reducers = combineReducers({
  one: reducerOne,
  two: reducerSec
});

export default reducers;
