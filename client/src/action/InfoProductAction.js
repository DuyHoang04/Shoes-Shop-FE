import {
  GET_INFO_PRODUCT_REQUEST,
  GET_INFO_PRODUCT_SUCCESS,
  GET_INFO_PRODUCT_FAILURE,
  ADD_COMMENT_PRODUCT_REQUEST,
  ADD_COMMENT_PRODUCT_SUCCESS,
  ADD_COMMENT_PRODUCT_FAILURE,
} from "../constants/InfoProductType";

const getInfoProductRequest = (payload) => {
  return {
    type: GET_INFO_PRODUCT_REQUEST,
    payload,
  };
};

const getInfoProductSuccess = (payload) => {
  return {
    type: GET_INFO_PRODUCT_SUCCESS,
    payload,
  };
};

const getInfoProductFailure = (payload) => {
  return {
    type: GET_INFO_PRODUCT_FAILURE,
    payload,
  };
};

const addCommentProductRequest = (payload) => {
  return {
    type: ADD_COMMENT_PRODUCT_REQUEST,
    payload,
  };
};

const addCommentProductSuccess = (payload) => {
  return {
    type: ADD_COMMENT_PRODUCT_SUCCESS,
    payload,
  };
};

const addCommentProductFailure = (payload) => {
  return {
    type: ADD_COMMENT_PRODUCT_FAILURE,
    payload,
  };
};

export {
  getInfoProductRequest,
  getInfoProductSuccess,
  getInfoProductFailure,
  addCommentProductRequest,
  addCommentProductSuccess,
  addCommentProductFailure,
};
