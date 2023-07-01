import { takeEvery, put } from "redux-saga/effects";
import * as actions from "../action/authAction";
import * as callAPI from "../fetchApi/authApi";
import { LOGIN_REQUEST } from "../constants/authType";

function* handleLogin({ payload }) {
  console.log("Bo");
  try {
    const { token } = yield callAPI.Login(payload);
    yield put(actions.LoginSuccess({ token }));
  } catch (err) {
    yield put(actions.LoginFailure(err.message));
  }
}

const authSaga = [takeEvery(LOGIN_REQUEST, handleLogin)];

export default authSaga;
