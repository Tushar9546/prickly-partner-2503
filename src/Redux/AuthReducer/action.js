import * as types from "./actionTypes";
import axios from 'axios';

export const register=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_REGISTER_REQUEST})
    return axios.post("https://reqres.in/api/register",payload)
    .then((res)=>{
     return dispatch({type:types.USER_REGISTER_SUCCESS,payload:res.data.token})
      
    })
    .catch((err)=>{
        dispatch({type:types.USER_REGISTER_FAILURE,payload:err})

    })

}

export const login=(params)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",params)
    .then((res)=>{
     return dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data.token})
     

    })
    .catch((err)=>{
        dispatch({type:types.USER_LOGIN_FAILURE,payload:err})

    })

}

export const logout = (payload) => (dispatch) => {
    dispatch({type:types.USER_LOGOUT_SUCCESS,payload})
  }