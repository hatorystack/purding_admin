import { CHANNEL_VIDEO_UPDATE } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {},
};

const ChannelVideoUpdateReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANNEL_VIDEO_UPDATE:
      return {
        ...state,
        code: action.code,
        message: action.message,
        updated_info: action.data,
      };
    default:
      return state;
  }
};

export default ChannelVideoUpdateReducer;
