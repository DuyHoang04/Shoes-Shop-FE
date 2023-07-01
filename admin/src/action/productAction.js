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
const getProductDetailRequest = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL_REQUEST,
    payload,
  };
};
const getProductDetailSuccess = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload,
  };
};
const getProductDetailFailure = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL_FAILURE,
    payload,
  };
};

const addProductsRequest = (payload) => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload,
  };
};
const addProductsSuccess = () => {
  return {
    type: ADD_PRODUCT_SUCCESS,
  };
};
const addProductsFailure = (payload) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload,
  };
};

const updateProductsRequest = (payload) => {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload,
  };
};
const updateProductsSuccess = () => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
  };
};
const updateProductsFailure = (payload) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload,
  };
};

const removeProductsRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_REQUEST,
    payload,
  };
};
const removeProductsSuccess = () => {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
  };
};
const removeProductsFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_FAILURE,
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
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
  updateProductsRequest,
  updateProductsSuccess,
  updateProductsFailure,
  removeProductsFailure,
  removeProductsRequest,
  removeProductsSuccess,
};
