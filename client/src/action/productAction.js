import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_FILTER_REQUEST,
  GET_PRODUCT_FILTER_SUCCESS,
  GET_PRODUCT_FILTER_FAILURE,
  ADD_COMMENT_PRODUCT_REQUEST,
  ADD_COMMENT_PRODUCT_SUCCESS,
  ADD_COMMENT_PRODUCT_FAILURE,
} from "../constants/productType";

const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

const getProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};

const getProductFailure = (payload) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload,
  };
};

const getProductFilterRequest = (payload) => {
  return {
    type: GET_PRODUCT_FILTER_REQUEST,
    payload,
  };
};

const getProductFilterSuccess = (payload) => {
  return {
    type: GET_PRODUCT_FILTER_SUCCESS,
    payload,
  };
};

const getProductFilterFailure = (payload) => {
  return {
    type: GET_PRODUCT_FILTER_FAILURE,
    payload,
  };
};

export {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
  getProductFilterRequest,
  getProductFilterSuccess,
  getProductFilterFailure,
};
