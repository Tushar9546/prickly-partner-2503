import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as GroceriesReducer } from "./Groceries/reducer";
import { AuthReducer as authreducer} from "./AuthReducer/reducer";
import { reducer as WomenReducer } from "./WomenReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import { reducer as FruitsReducer } from "./Fruits/reducer"

const rootReducer = combineReducers({
  authreducer,
  GroceriesReducer,
  WomenReducer,
  cartReducer,
  FruitsReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
