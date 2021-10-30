import { TAG_ADD } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {},
};

const TagAddReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TAG_ADD:
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

export default TagAddReducer;
