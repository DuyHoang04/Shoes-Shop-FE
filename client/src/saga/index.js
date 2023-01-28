import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import cartSaga from "./cartSaga";
import infoProductSaga from "./infoProductSaga";
import productSaga from "./productSaga";

function* rootSaga() {
  yield all([...productSaga, ...authSaga, ...infoProductSaga, ...cartSaga]);
}

export default rootSaga;
