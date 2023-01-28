import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/orderType";

const createOrderRequest = (payload) => {
  return {
    type: CREATE_ORDER_REQUEST,
    payload,
  };
};
const createOrderSuccess = () => {
  return {
    type: CREATE_ORDER_SUCCESS,
  };
};
const createOrderFailure = (payload) => {
  return {
    type: CREATE_ORDER_FAILURE,
    payload,
  };
};

export { createOrderRequest, createOrderFailure, createOrderSuccess };
