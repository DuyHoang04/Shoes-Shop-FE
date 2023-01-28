import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
} from "../constants/productType";
import * as actions from "../action/productAction.js";
import * as callAPI from "../fetchApi/productApi";

function* handleGetProduct() {
  try {
    const data = yield callAPI.getProducts();
    yield put(actions.getProductsSuccess(data));
  } catch (err) {
    yield put(actions.getProductsFailure(err));
  }
}

function* handleAddProduct({ payload }) {
  console.log("VO");
  try {
    yield callAPI.addProducts(payload);
    yield put(actions.addProductsSuccess());
    yield put(actions.getProductsRequest());
  } catch (err) {
    yield put(actions.addProductsFailure(err));
  }
}

const productSaga = [
  takeEvery(GET_PRODUCT_REQUEST, handleGetProduct),
  takeEvery(ADD_PRODUCT_REQUEST, handleAddProduct),
];

export default productSaga;
