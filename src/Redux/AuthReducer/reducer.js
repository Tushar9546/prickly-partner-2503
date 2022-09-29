import * as types from "./actionTypes"

import { loadData, saveData } from "../../Component/Utils/localStorage";

const initialState={
    isAuth:loadData("token") ? true : false,
    token:loadData("token") || "",
    isAuthLoading:false,
    isAuthError:false,
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.USER_REGISTER_REQUEST:
            return {...state,isAuthLoading:true}
        case types.USER_REGISTER_SUCCESS:
            return {...state,isAuthLoading:false}
        case types.USER_REGISTER_FAILURE:
            return {...state,isAuthLoading:false,isAuthError:true}

        case types.USER_LOGIN_REQUEST:
            return {...state,isAuthLoading:true}
        case types.USER_LOGIN_SUCCESS:
            saveData("token",payload)
            return {...state,isAuthLoading:false,isAuth:true,token:payload}
        case types.USER_LOGIN_FAILURE:
            return {...state,isAuthLoading:false,isAuthError:true,isAuth:false,token:""}

         case types.USER_LOGOUT_SUCCESS:
                localStorage.removeItem("token");
                localStorage.removeItem("user");
             return {
              ...state,
                 isAuth: false,
             };    

        default:
            return state;
    }

}

export {reducer};
