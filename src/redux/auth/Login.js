import { AUTH_LOGIN } from "../Constants";

const INIT_STATE = {
  code: null,
  message: "",
  token: "",
};

const LoginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        code: action.code,
        message: action.message,
        token: action.token,
      };
    default:
      return state;
  }
};

export default LoginReducer;
