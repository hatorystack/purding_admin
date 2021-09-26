import { CHANNEL_LIST } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  list: [],
  total_cnt: 0,
};

const ChannelListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANNEL_LIST:
      return {
        ...state,
        code: action.code,
        message: action.message,
        list: action.list,
        total_cnt: action.total_cnt,
      };
    default:
      return state;
  }
};

export default ChannelListReducer;
