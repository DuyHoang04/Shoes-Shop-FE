import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/authType";

const LoginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
const LoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
const LoginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export { LoginRequest, LoginSuccess, LoginFailure };
