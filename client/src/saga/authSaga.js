import { takeEvery, put } from "redux-saga/effects";
import * as actions from "../action/authAction";
import * as callAPI from "../fetchApi/authApi";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../constants/AuthType.js";

function* handleLogin({ payload }) {
  try {
    console.log(payload);
    const data = yield callAPI.Login(payload);
    console.log(data);
    yield put(actions.loginSuccess(data));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* handleRegister({ payload }) {
  try {
    console.log(payload);
    const data = yield callAPI.Register(payload);
    console.log(data);
    yield put(actions.registerSuccess(data.msg));
  } catch (err) {
    yield put(actions.registerFailure(err));
  }
}

const authSaga = [
  takeEvery(LOGIN_REQUEST, handleLogin),
  takeEvery(REGISTER_REQUEST, handleRegister),
];

export default authSaga;
