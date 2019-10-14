import {combineReducers} from "redux";
import header from "./header";
import test from "./test";
import expenseReducer from "./expenseReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  combinedHeader: header,
  combinedTest: test,
  combinedexpenseReducer: expenseReducer,
  combinedfilterReducer: filterReducer
});
