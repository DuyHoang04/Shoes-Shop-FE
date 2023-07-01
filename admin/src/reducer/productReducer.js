import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILURE,
} from "../constants/productType";

export const initialState = {
  productList: [],
  productDetail: null,
  isFetching: false,
  message: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case GET_PRODUCT_DETAIL_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case REMOVE_PRODUCT_REQUEST:
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
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productDetail: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      };
    case GET_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
    case GET_PRODUCT_DETAIL_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case REMOVE_PRODUCT_FAILURE:
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
