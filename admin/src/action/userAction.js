import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILURE,
  CHANGE_PASSWORD_USER_REQUEST,
  CHANGE_PASSWORD_USER_SUCCESS,
  CHANGE_PASSWORD_USER_FAILURE,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
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

const addUserRequest = (payload) => {
  return {
    type: ADD_USER_REQUEST,
    payload,
  };
};
const addUserSuccess = (payload) => {
  return {
    type: ADD_USER_SUCCESS,
    payload,
  };
};
const addUserFailure = (payload) => {
  return {
    type: ADD_USER_FAILURE,
    payload,
  };
};
const getUserDetailUserRequest = (payload) => {
  return {
    type: GET_USER_DETAIL_REQUEST,
    payload,
  };
};
const getUserDetailUserSuccess = (payload) => {
  return {
    type: GET_USER_DETAIL_SUCCESS,
    payload,
  };
};
const getUserDetailUserFailure = (payload) => {
  return {
    type: GET_USER_DETAIL_FAILURE,
    payload,
  };
};

const updateUserRequest = (payload) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload,
  };
};
const updateUserSuccess = (payload) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
};
const updateUserFailure = (payload) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload,
  };
};
const changePasswordUserRequest = (payload) => {
  return {
    type: CHANGE_PASSWORD_USER_REQUEST,
    payload,
  };
};
const changePasswordUserSuccess = (payload) => {
  return {
    type: CHANGE_PASSWORD_USER_SUCCESS,
    payload,
  };
};
const changePasswordUserFailure = (payload) => {
  return {
    type: CHANGE_PASSWORD_USER_FAILURE,
    payload,
  };
};

const removeUserRequest = (payload) => {
  return {
    type: REMOVE_USER_REQUEST,
    payload,
  };
};
const removeUserSuccess = (payload) => {
  return {
    type: REMOVE_USER_SUCCESS,
    payload,
  };
};
const removeUserFailure = (payload) => {
  return {
    type: REMOVE_USER_FAILURE,
    payload,
  };
};

export {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  getUserDetailUserRequest,
  getUserDetailUserSuccess,
  getUserDetailUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  changePasswordUserRequest,
  changePasswordUserSuccess,
  changePasswordUserFailure,
  removeUserRequest,
  removeUserSuccess,
  removeUserFailure,
};
