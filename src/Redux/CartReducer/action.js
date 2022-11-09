import * as types from "./actionTypes";
import axios from "axios";

export const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });
  return axios
    .get("http://localhost:8080/Cart")
    .then((res) => {
      console.log("GetRes:", res);
      return dispatch({ type: types.GET_CARTDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CARTDATA_FAILURE });
    });
};

export const addCartData = (newData) => (dispatch) => {
  dispatch({ type: types.ADD_CARTDATA_REQUEST });
  return axios
    .post(`http://localhost:8080/Cart`, newData)
    .then((res) => {
      console.log("AddRes:", res);
      return dispatch({ type: types.ADD_CARTDATA_SUCCESS, payload: res.data });
    })
    //.then(() => getCartData())
    .catch((err) => {
      return dispatch({ type: types.ADD_CARTDATA_FAILURE });
    });
};

export const updateCartData = (id, params) => (dispatch) => {
  dispatch({ type: types.UPDATE_CARTDATA_REQUEST });
  return axios
    .patch(
      `http://localhost:8080/Cart/${id}`,{ count:params})
    .then((res) => {
     // console.log("UpdateRes:", res);
      // axios
      //   .get("http://localhost:8080/Cart")
      //   .then((res) => {
      //     console.log("InnerRes:", res);
          return dispatch({
            type: types.UPDATE_CARTDATA_SUCCESS,
            payload: res.data,
          });
       
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CARTDATA_FAILURE });
    });
};

export const deleteCartData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CARTDATA_REQUEST });
  return axios
    .delete(
      `http://localhost:8080/Cart/${id}` )
    .then((res) => {
        return dispatch({
            type: types.DELETE_CARTDATA_SUCCESS,
            payload: res.data,
          });
      
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CARTDATA_FAILURE });
    });
};