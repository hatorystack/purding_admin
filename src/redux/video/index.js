import { combineReducers } from "redux";
import videoList from "./VideoList";
import videoTagging from "./VideoTagging";
import videoUpdate from "./VideoUpdate";

export default combineReducers({
  videoList,
  videoTagging,
  videoUpdate,
});
