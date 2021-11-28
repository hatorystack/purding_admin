import { combineReducers } from "redux";
import channelList from "./ChannelList";
import channelAdd from "./ChannelAdd";
import channelYoutubeVideoUpdate from "./ChannelVideoUpdate";
import allChannelYoutubeVideoUpdate from "./AllChannelVideoUpdate";

export default combineReducers({
  channelList,
  channelAdd,
  channelYoutubeVideoUpdate,
  allChannelYoutubeVideoUpdate,
});
