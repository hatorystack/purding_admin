import { combineReducers } from "redux";
import authReducer from "./auth";
import channelReducer from "./channel";

const Reducers = combineReducers({
  authReducer,
  channelReducer,
});

export default Reducers;
