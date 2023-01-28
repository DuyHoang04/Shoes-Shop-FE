import {
  GET_INFO_PRODUCT_REQUEST,
  GET_INFO_PRODUCT_SUCCESS,
  GET_INFO_PRODUCT_FAILURE,
  ADD_COMMENT_PRODUCT_REQUEST,
  ADD_COMMENT_PRODUCT_SUCCESS,
  ADD_COMMENT_PRODUCT_FAILURE,
} from "../constants/InfoProductType";
export const initialState = {
  product: [],
  isFetching: false,
  error: "",
};

const infoProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_PRODUCT_REQUEST:
    case ADD_COMMENT_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_INFO_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        product: action.payload,
      };
    case ADD_COMMENT_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case GET_INFO_PRODUCT_FAILURE:
    case ADD_COMMENT_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default infoProductReducer;
