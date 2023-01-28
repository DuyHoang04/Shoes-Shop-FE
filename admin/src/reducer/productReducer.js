import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../constants/productType";

export const initialState = {
  productList: [],
  isFetching: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productList: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case GET_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
