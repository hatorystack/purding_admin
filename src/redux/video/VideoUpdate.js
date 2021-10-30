import { VIDEO_UPDATE } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: [],
};

const VideoUpdateReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case VIDEO_UPDATE:
      return {
        ...state,
        code: action.code,
        message: action.message,
        data: action.data,
      };
    default:
      return state;
  }
};

export default VideoUpdateReducer;
