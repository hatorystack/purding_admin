import { AUTH_LOGIN } from "../Constants";

import ApiResponse from "../../service/apiResponse";
import { isEmpty } from "lodash";

export const login = ({ email, password }) => {
  return (dispatch) => {
    return ApiResponse("/admin/authenticate", {
      dispatch,
      data: { email, password },
    })
      .then((response) => {
        const data = response;

        // console.log(data);

        if (response.status_code === 200) {
          localStorage.setItem("token", data.access_token);
        }

        dispatch({
          type: AUTH_LOGIN,
          code: response.status_code,
          message: "",
          token: isEmpty(data) ? null : data.access_token,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};
