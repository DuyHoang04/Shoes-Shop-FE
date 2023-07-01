import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CHANGE_PASSWORD_USER_REQUEST,
  CHANGE_PASSWORD_USER_SUCCESS,
  CHANGE_PASSWORD_USER_FAILURE,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
} from "../constants/userType";

export const initialState = {
  userList: [],
  isFetching: false,
  error: null,
  userDetail: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
    case ADD_USER_REQUEST:
    case GET_USER_DETAIL_REQUEST:
    case UPDATE_USER_REQUEST:
    case CHANGE_PASSWORD_USER_REQUEST:
    case REMOVE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userList: action.payload,
      };
    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userDetail: action.payload,
      };
    case ADD_USER_SUCCESS:
    case CHANGE_PASSWORD_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case GET_USER_FAILURE:
    case ADD_USER_FAILURE:
    case GET_USER_DETAIL_FAILURE:
    case UPDATE_USER_FAILURE:
    case CHANGE_PASSWORD_USER_FAILURE:
    case REMOVE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
