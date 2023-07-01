import { takeEvery, put, select } from "redux-saga/effects";
import {
  ADD_USER_REQUEST,
  GET_USER_REQUEST,
  GET_USER_DETAIL_REQUEST,
  CHANGE_PASSWORD_USER_REQUEST,
  UPDATE_USER_REQUEST,
  REMOVE_USER_REQUEST,
} from "../constants/userType";
import * as actions from "../action/userAction";
import * as callAPI from "../fetchApi/userApi";
import * as selector from "../selectors/index";

function* handleGetUser() {
  try {
    console.log("Vo");
    const { data } = yield callAPI.getUser();
    console.log(data);
    yield put(actions.getUserSuccess(data));
  } catch (err) {
    yield put(actions.getUserFailure(err));
  }
}

function* handleGetUserDetail({ payload }) {
  try {
    const { data } = yield callAPI.getUserDetail(payload);
    yield put(actions.getUserDetailUserSuccess(data));
  } catch (err) {
    yield put(actions.getUserDetailUserFailure(err));
  }
}

function* handleUpdateUser({ payload }) {
  try {
    const accessToken = yield select(selector.accessToken);
    const { message } = yield callAPI.updateUser({ payload, accessToken });
    yield put(actions.updateUserSuccess(message));
    yield put(actions.getUserDetailUserRequest(payload.userId));
  } catch (err) {
    yield put(actions.updateUserFailure(err));
  }
}
function* handleChangePasswordUser({ payload }) {
  try {
    const accessToken = yield select(selector.accessToken);
    yield callAPI.changePasswordUser({ payload, accessToken });
    yield put(actions.changePasswordUserSuccess());
  } catch (err) {
    yield put(actions.changePasswordUserFailure(err.message));
  }
}

function* handleAddUser({ payload }) {
  try {
    const { message } = yield callAPI.addUser(payload);
    yield put(actions.addUserSuccess(message));
  } catch (err) {
    yield put(actions.addUserFailure(err.message));
  }
}

function* handleRemoveUser({ payload }) {
  try {
    const accessToken = yield select(selector.accessToken);
    yield callAPI.removeUser({ payload, accessToken });
    yield put(actions.removeUserSuccess());
    yield put(actions.getUserRequest());
  } catch (err) {
    yield put(actions.removeUserFailure(err.message));
  }
}

const userSaga = [
  takeEvery(GET_USER_REQUEST, handleGetUser),
  takeEvery(GET_USER_DETAIL_REQUEST, handleGetUserDetail),
  takeEvery(UPDATE_USER_REQUEST, handleUpdateUser),
  takeEvery(CHANGE_PASSWORD_USER_REQUEST, handleChangePasswordUser),
  takeEvery(ADD_USER_REQUEST, handleAddUser),
  takeEvery(REMOVE_USER_REQUEST, handleRemoveUser),
];

export default userSaga;
