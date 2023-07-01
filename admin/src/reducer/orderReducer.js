import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/brandType";
import {
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
} from "../constants/orderType";

export const initialState = {
  orderList: [],
  isFetching: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orderList: action.payload,
      };

    case GET_ALL_ORDER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
