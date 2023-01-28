import { all } from "redux-saga/effects";
import productSaga from "./productSaga";
import userSaga from "./userSaga";

function* rootSaga() {
  yield all({ ...productSaga, ...userSaga });
}

export default rootSaga;
