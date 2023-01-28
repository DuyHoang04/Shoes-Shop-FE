import {
  ADD_CART_ITEM_FAILURE,
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  GET_CART_ITEM_REQUEST,
  GET_CART_ITEM_SUCCESS,
  GET_CART_ITEM_FAILURE,
  SHOW_CART_REQUEST,
  SHOW_CART_FAILURE,
  SHOW_CART_SUCCESS,
  HIDE_CART_REQUEST,
  HIDE_CART_FAILURE,
  HIDE_CART_SUCCESS,
} from "../constants/cartType";

const addCartItemRequest = (payload) => {
  return {
    type: ADD_CART_ITEM_REQUEST,
    payload,
  };
};

const addCartItemSuccess = (payload) => {
  return {
    type: ADD_CART_ITEM_SUCCESS,
    payload,
  };
};

const addCartItemFailure = (payload) => {
  return {
    type: ADD_CART_ITEM_FAILURE,
    payload,
  };
};

const getCartItemRequest = (payload) => {
  return {
    type: GET_CART_ITEM_REQUEST,
    payload,
  };
};

const getCartItemSuccess = (payload) => {
  return {
    type: GET_CART_ITEM_SUCCESS,
    payload,
  };
};

const getCartItemFailure = (payload) => {
  return {
    type: GET_CART_ITEM_FAILURE,
    payload,
  };
};

const showCartRequest = () => {
  return {
    type: SHOW_CART_REQUEST,
  };
};

const showCartSuccess = (payload) => {
  return {
    type: SHOW_CART_SUCCESS,
    payload,
  };
};

const showCartFailure = (payload) => {
  return {
    type: SHOW_CART_FAILURE,
    payload,
  };
};

const hideCartRequest = () => {
  return {
    type: HIDE_CART_REQUEST,
  };
};

const hideCartSuccess = (payload) => {
  return {
    type: HIDE_CART_SUCCESS,
    payload,
  };
};

const hideCartFailure = (payload) => {
  return {
    type: HIDE_CART_FAILURE,
    payload,
  };
};

export {
  addCartItemRequest,
  addCartItemSuccess,
  addCartItemFailure,
  getCartItemRequest,
  getCartItemSuccess,
  getCartItemFailure,
  showCartRequest,
  showCartSuccess,
  showCartFailure,
  hideCartRequest,
  hideCartSuccess,
  hideCartFailure,
};
