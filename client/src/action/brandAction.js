import {
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

export { getBrandsRequest, getBrandsSuccess, getBrandsFailure };
