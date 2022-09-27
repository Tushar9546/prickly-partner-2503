import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as MobileReducer } from "./Mobiles/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ MobileReducer, AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
