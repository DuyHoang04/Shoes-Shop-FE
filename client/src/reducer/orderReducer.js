import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/orderType";

export const initialState = {
  isFetching: false,
  error: "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
