import axios from "axios";
import { apiException } from "./apiException";
import { LOADING } from "../redux/Constants";

export default async function ApiResponse(
  url,
  {
    dispatch = null,
    data = {},
    config = {},
    header = {},
    method = "post",
    orgResponse = false,
  }
) {
  if (dispatch) {
    await dispatch({
      type: LOADING,
      status: true,
    });
  }

  let callApi;
  if (orgResponse) {
    callApi = await axios[method](
      `${process.env.REACT_APP_API_URL}${url}`,
      data,
      {
        ...config,
        headers: {
          ...header,
          ...authHeader(),
        },
      }
    );
  } else {
    callApi = await axios[method](
      `${process.env.REACT_APP_API_URL}${url}`,
      data,
      {
        headers: {
          ...header,
          ...authHeader(),
        },
      }
    )
      .then(apiException)
      .catch(apiException);
  }

  if (dispatch) {
    await dispatch({
      type: LOADING,
      status: false,
    });
  }

  return callApi;
}

const authHeader = () => {
  const token = localStorage.getItem("token");
  if (!!token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};
