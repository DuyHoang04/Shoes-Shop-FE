import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import cartSaga from "./cartSaga";
import infoProductSaga from "./infoProductSaga";
import orderSaga from "./orderSaga";
import productSaga from "./productSaga";
import brandSaga from "./brandSaga";

function* rootSaga() {
  yield all([
    ...productSaga,
    ...authSaga,
    ...infoProductSaga,
    ...cartSaga,
    ...orderSaga,
    ...brandSaga,
  ]);
}

export default rootSaga;
