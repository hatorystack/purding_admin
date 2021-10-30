import { RESET, VIDEO_LIST, VIDEO_UPDATE } from "../Constants";
import { VIDEO_TAGGING } from "../Constants";

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
        const data = response.data;

        dispatch({
          type: VIDEO_LIST,
          code: response.code,
          message: response.message,
          list: isEmpty(data) ? null : data.list,
          total_cnt: isEmpty(data) ? null : data.total_cnt,
          total_page: isEmpty(data) ? null : data.total_page,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};

// Video Tagging

export const videoTagging = (
  params = {
    video_id: "",
    tag_id: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/videotagging", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: VIDEO_TAGGING,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};

// Video Reset
export const videoReset = () => {
  return (dispatch) => {
    return ApiResponse("/videotagging", {
      dispatch,
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: RESET,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};

// Video Update
export const videoUpdate = (
  params = {
    id: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/updatevideostatus", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: VIDEO_UPDATE,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};
