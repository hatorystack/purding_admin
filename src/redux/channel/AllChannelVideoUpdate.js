import { ALL_CHANNEL_VIDEO_UPDATE } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {},
};

const AllChannelVideoUpdateReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ALL_CHANNEL_VIDEO_UPDATE:
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

export default AllChannelVideoUpdateReducer;
