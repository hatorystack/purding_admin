import { combineReducers } from "redux";
import tagAdd from "./TagAdd";
import tagDelete from "./TagDelete";

export default combineReducers({
  tagAdd,
  tagDelete,
});
