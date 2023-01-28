import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../constants/userType";

export const initialState = {
  userList: [],
  isFetching: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
    case ADD_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userLists: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case GET_USER_FAILURE:
    case ADD_USER_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
