import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/AuthType";

const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
};

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
};
