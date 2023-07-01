import {
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
} from "../constants/orderType";

const getAllOrderRequest = () => {
  return {
    type: GET_ALL_ORDER_REQUEST,
  };
};
const getAllOrderSuccess = (payload) => {
  return {
    type: GET_ALL_ORDER_SUCCESS,
    payload,
  };
};
const getAllOrderFailure = (payload) => {
  return {
    type: GET_ALL_ORDER_FAILURE,
    payload,
  };
};

export { getAllOrderRequest, getAllOrderSuccess, getAllOrderFailure };
