import * as types from "./actionTypes";
import axios from "axios";

const getGroceriesProducts = (params) => (dispatch) => {
    dispatch({type: types.GET_GROCERIES_REQUEST})
    return axios.get("http://localhost:8080/groceries", params).then((r) => {
       return dispatch({
        type: types.GET_GROCERIES_SUCCESS, payload: r.data
       })
    })
    .catch((e) => {
        return dispatch({type: types.GET_GROCERIES_FAILURE, payload: e})
    })
}

export { getGroceriesProducts }