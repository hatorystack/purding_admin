import { VIDEO_LIST } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  list: [],
  total_cnt: 0,
  total_page: 0,
};

const VideoListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case VIDEO_LIST:
      return {
        ...state,
        code: action.code,
        message: action.message,
        list: action.list,
        total_cnt: action.total_cnt,
        total_page: action.total_page,
      };
    default:
      return state;
  }
};

export default VideoListReducer;
