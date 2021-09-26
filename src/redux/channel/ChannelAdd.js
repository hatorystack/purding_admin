import { CHANNEL_ADD } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {},
};

const ChannelAddReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANNEL_ADD:
      return {
        ...state,
        code: action.code,
        message: action.message,
        channel_info: action.data,
      };
    default:
      return state;
  }
};

export default ChannelAddReducer;
