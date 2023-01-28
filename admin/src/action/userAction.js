import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/userType";

const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};
const getUserSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};
const getUserFailure = (payload) => {
  return {
    type: GET_USER_FAILURE,
    payload,
  };
};

export { getUserRequest, getUserSuccess, getUserFailure };
