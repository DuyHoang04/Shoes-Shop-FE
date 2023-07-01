import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/brandType";

export const initialState = {
  brandList: [],
  isFetching: false,
  error: null,
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
    case ADD_BRAND_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        brandList: action.payload,
      };
    case ADD_BRAND_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case GET_BRAND_FAILURE:
    case ADD_BRAND_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default brandReducer;
