import * as types from "./actionTypes";

const initState = {
  cartData: [],
  isLoading: false,
  isError: false,
};

export const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CARTDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_CARTDATA_SUCCESS:
      return {
        ...state,
        cartData: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_CARTDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cartData: [],
      };
   
    default:
      return state;
  }
};



