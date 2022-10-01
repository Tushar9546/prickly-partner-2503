import * as types from "./actionTypes";
import axios from "axios";

const getMobilesProducts = ({page = 1, sort="none", order="none"}, params) => (dispatch) => {
    dispatch({type: types.GET_MOBILES_REQUEST})
    return axios.get(`http://localhost:8080/mobiletablets?_sort=${sort}&_order=${order}&_page=${page}&_limit=20`, params).then((r) => {
       return dispatch({
        type: types.GET_MOBILES_SUCCESS, payload: r.data
       })
    })
    .catch((e) => {
        return dispatch({type: types.GET_MOBILES_FAILURE, payload: e})
    })
}

export { getMobilesProducts }