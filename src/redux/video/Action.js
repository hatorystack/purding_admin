import { VIDEO_LIST } from "../Constants";

import ApiResponse from "src/service/apiResponse";
import { isEmpty } from "lodash";

// Video List
export const videoList = (
  params = {
    page: 1,
    per_page: 15,
    search_channel: "",
    search_start_at: "",
    search_end_at: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/videolist", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        const data = response;

        dispatch({
          type: VIDEO_LIST,
          code: response.code,
          message: response.message,
          list: isEmpty(data) ? null : data.list,
          total_cnt: isEmpty(data) ? null : data.total_cnt,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};
