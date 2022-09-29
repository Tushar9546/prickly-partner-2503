import axios from "axios";
import * as types from "./actionTypes";

export const fetchWomenData =
  ({ page = 1, sort = "none", order = "none" }) =>
  (dispatch) => {
    dispatch({ type: types.GET_WOMENDATA_REQUEST });
    return axios
      .get(
        `http://localhost:8080/womens?_sort=${sort}&_order=${order}&_page=${page}&_limit=16`
      )
      .then((res) => {
        return dispatch({
          type: types.GET_WOMENDATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => dispatch({ type: types.GET_WOMENDATA_FAILURE }));
  };
