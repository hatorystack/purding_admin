import { combineReducers } from "redux";
import channelList from "./ChannelList";
import channelAdd from "./ChannelAdd";

export default combineReducers({
  channelList,
  channelAdd,
});
