import {
  ADD_CART_ITEM_FAILURE,
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  GET_CART_ITEM_REQUEST,
  GET_CART_ITEM_SUCCESS,
  GET_CART_ITEM_FAILURE,
  SHOW_CART_REQUEST,
  HIDE_CART_REQUEST,
  SHOW_CART_SUCCESS,
  HIDE_CART_SUCCESS,
  SHOW_CART_FAILURE,
  HIDE_CART_FAILURE,
} from "../constants/cartType";

export const initialState = {
  cartShow: false,
  cartItem: [],
  isFetching: false,
  error: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // request
    case ADD_CART_ITEM_REQUEST:
    case GET_CART_ITEM_REQUEST:
    case SHOW_CART_REQUEST:
    case HIDE_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    //add cart item
    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    //get cartItem
    case GET_CART_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cartItem: action.payload,
      };
    //show cart
    case SHOW_CART_SUCCESS:
    case HIDE_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cartShow: action.payload,
      };
    //failure
    case ADD_CART_ITEM_FAILURE:
    case GET_CART_ITEM_FAILURE:
    case SHOW_CART_FAILURE:
    case HIDE_CART_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
