import { combineReducers } from "redux";
import authReducer from "./auth";
import channelReducer from "./channel";
import videoReducer from "./video";
import tagReducer from "./tag";

const Reducers = combineReducers({
  authReducer,
  channelReducer,
  videoReducer,
  tagReducer,
});

export default Reducers;
