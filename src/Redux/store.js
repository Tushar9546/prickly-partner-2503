import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as GroceriesReducer } from "./Groceries/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as WomenReducer } from "./WomenReducer/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  GroceriesReducer,
  WomenReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
