import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import brandSaga from "./brandSaga";
import productSaga from "./productSaga";
import userSaga from "./userSaga";
import orderSaga from "./orderSaga";

function* rootSaga() {
  yield all([
    ...authSaga,
    ...userSaga,
    ...productSaga,
    ...brandSaga,
    ...orderSaga,
  ]);
}

export default rootSaga;
