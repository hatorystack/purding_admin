import { TAG_DELETE } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  data: {
    status: 0,
  },
};

const TagAddReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TAG_DELETE:
      return {
        ...state,
        code: action.code,
        message: action.message,
        date: action.data,
      };
    default:
      return state;
  }
};

export default TagAddReducer;
