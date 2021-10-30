import { VIDEO_TAGGING, RESET } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {},
};

const VideoTaggingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case VIDEO_TAGGING:
      return {
        ...state,
        code: action.code,
        message: action.message,
        data: action.data,
      };
    case RESET:
      return INIT_STATE;
    default:
      return state;
  }
};

export default VideoTaggingReducer;
