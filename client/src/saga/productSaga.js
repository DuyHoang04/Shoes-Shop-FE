import { takeEvery, put } from "redux-saga/effects";
import {
  GET_PRODUCT_FILTER_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_SEARCH_PRODUCT_REQUEST,
} from "../constants/productType";
import * as actions from "../action/productAction.js";
import * as callAPI from "../fetchApi/productApi";

function* handleGetProductAtHome() {
  console.log("Vo");
  try {
    const { data } = yield callAPI.getProductsAtHome();
    yield put(actions.getProductSuccess(data));
  } catch (err) {
    yield put(actions.getProductFailure(err));
  }
}

function* handleGetProductFilter({ payload }) {
  console.log(payload);
  try {
    const { data } = yield callAPI.getProductsFilter(payload);
    yield put(actions.getProductFilterSuccess(data));
  } catch (err) {
    yield put(actions.getProductFilterFailure(err));
  }
}

function* handleGetSearchProduct({ payload }) {
  console.log(payload);
  try {
    const { data } = yield callAPI.getSearchProduct(payload);
    yield put(actions.getSearchProductSuccess(data));
  } catch (err) {
    yield put(actions.getSearchProductFailure(err));
  }
}

const productSaga = [
  takeEvery(GET_PRODUCT_REQUEST, handleGetProductAtHome),
  takeEvery(GET_PRODUCT_FILTER_REQUEST, handleGetProductFilter),
  takeEvery(GET_SEARCH_PRODUCT_REQUEST, handleGetSearchProduct),
];

export default productSaga;
