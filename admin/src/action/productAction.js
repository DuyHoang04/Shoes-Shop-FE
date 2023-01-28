import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../constants/productType";

const getProductsRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};
const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};
const getProductsFailure = (payload) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload,
  };
};

const addProductsRequest = (payload) => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload,
  };
};
const addProductsSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload,
  };
};
const addProductsFailure = (payload) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload,
  };
};

export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  addProductsRequest,
  addProductsSuccess,
  addProductsFailure,
};
