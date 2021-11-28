import { CHANNEL_LIST } from "../Constants";
import { CHANNEL_ADD } from "../Constants";
import { ALL_CHANNEL_VIDEO_UPDATE } from "../Constants";
import { CHANNEL_VIDEO_UPDATE } from "../Constants";

import ApiResponse from "../../service/apiResponse";
import { isEmpty } from "lodash";

// Channel List
export const channelList = (
  params = {
    page: 1,
    per_page: 15,
    language: "",
    search_channel: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/channellist", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        const data = response;
        dispatch({
          type: CHANNEL_LIST,
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

// Channel Add
export const channelAdd = (
  params = {
    channel_id: "",
    channel_title: "",
    language: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/channel", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        // const data = response;

        // console.log(response);
        dispatch({
          type: CHANNEL_ADD,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  };
};

// All Channel Video Update
export const allChannelVideoUpdate = () => {
  return (dispatch) => {
    return ApiResponse("/admin/saveallchannelyoutubevideo", {
      dispatch,
      data: {},
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: ALL_CHANNEL_VIDEO_UPDATE,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  }
}

// Channel Video Update
export const channelVideoUpdate = (
  params = {
    channel_id: "",
    youtube_channel_id: "",
  }
) => {
  return (dispatch) => {
    return ApiResponse("/admin/savechannelyoutubevideo", {
      dispatch,
      data: { ...params },
      method: "post",
    })
      .then((response) => {
        dispatch({
          type: CHANNEL_VIDEO_UPDATE,
          code: response.code,
          message: response.message,
          data: response.data,
        });
      })
      .catch((err) => console.log(err + "action"));
  }
}