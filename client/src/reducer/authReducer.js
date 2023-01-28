import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../constants/AuthType";

export const initialState = {
  userToken: "",
  userId: "",
  isFetching: false,
  error: "",
  notice: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userToken: action?.payload?.token,
        userId: action?.payload?._id,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        notice: action.payload,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
