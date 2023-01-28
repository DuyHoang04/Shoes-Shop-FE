import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import cartSaga from "./cartSaga";
import infoProductSaga from "./infoProductSaga";
import orderSaga from "./orderSaga";
import productSaga from "./productSaga";

function* rootSaga() {
  yield all([
    ...productSaga,
    ...authSaga,
    ...infoProductSaga,
    ...cartSaga,
    ...orderSaga,
  ]);
}

export default rootSaga;
