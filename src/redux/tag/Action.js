import { TAG_ADD } from "../Constants";
import { TAG_DELETE } from "../Constants";

import ApiResponse from "src/service/apiResponse";
import { isEmpty } from "lodash";

// Tag Add
export const tagAdd = (
  params = {
    name: "",
    slug: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/savetag", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: TAG_ADD,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};

// Tag Delete
export const tagDelete = (
  params = {
    name: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/deletetag", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: TAG_DELETE,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};
