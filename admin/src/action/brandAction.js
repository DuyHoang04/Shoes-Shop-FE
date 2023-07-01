import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/brandType";

const getBrandsRequest = () => {
  return {
    type: GET_BRAND_REQUEST,
  };
};
const getBrandsSuccess = (payload) => {
  return {
    type: GET_BRAND_SUCCESS,
    payload,
  };
};
const getBrandsFailure = (payload) => {
  return {
    type: GET_BRAND_FAILURE,
    payload,
  };
};

const addBrandsRequest = (payload) => {
  return {
    type: ADD_BRAND_REQUEST,
    payload,
  };
};
const addBrandsSuccess = () => {
  return {
    type: ADD_BRAND_SUCCESS,
  };
};
const addBrandsFailure = (payload) => {
  return {
    type: ADD_BRAND_FAILURE,
    payload,
  };
};

export {
  getBrandsRequest,
  getBrandsSuccess,
  getBrandsFailure,
  addBrandsRequest,
  addBrandsSuccess,
  addBrandsFailure,
};
