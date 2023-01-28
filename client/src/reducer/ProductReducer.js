import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_FILTER_REQUEST,
  GET_PRODUCT_FILTER_SUCCESS,
  GET_PRODUCT_FILTER_FAILURE,
} from "../constants/productType";

export const initialState = {
  activePage: null,
  totalPage: null,
  productList: [],
  isFetching: false,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
    case GET_PRODUCT_FILTER_REQUEST:
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
    case GET_PRODUCT_FILTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
        productList: action.payload.products,
      };

    case GET_PRODUCT_FAILURE:
    case GET_PRODUCT_FILTER_FAILURE:
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
