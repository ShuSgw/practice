import { combineReducers } from "redux";
import reducerOne from "./one";
import reducerSec from "./two";
import authReducer from "./auth";

const reducers = combineReducers({
  one: reducerOne,
  two: reducerSec,
  authReducer: authReducer
});

export default reducers;
