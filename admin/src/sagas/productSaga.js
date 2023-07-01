import { takeEvery, put, select } from "redux-saga/effects";
import {
  ADD_PRODUCT_REQUEST,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_REQUEST,
  REMOVE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
} from "../constants/productType";
import * as actions from "../action/productAction.js";
import * as callAPI from "../fetchApi/productApi";
import * as selector from "../selectors/index";

function* handleGetProduct() {
  try {
    const { data } = yield callAPI.getProducts();
    yield put(actions.getProductsSuccess(data));
  } catch (err) {
    yield put(actions.getProductsFailure(err));
  }
}

function* handleGetProductDetail({ payload }) {
  try {
    const { data } = yield callAPI.getProductDetail(payload);

    yield put(actions.getProductDetailSuccess(data));
  } catch (err) {
    yield put(actions.getProductDetailFailure(err));
  }
}

function* handleAddProduct({ payload }) {
  try {
    const accessToken = yield select(selector.accessToken);
    yield callAPI.addProducts({ payload, accessToken });
    yield put(actions.addProductsSuccess());
  } catch (err) {
    yield put(actions.addProductsFailure(err));
  }
}

function* handleUpdateProduct({ payload }) {
  console.log("VO");
  try {
    console.log(payload);
    const accessToken = yield select(selector.accessToken);

    yield callAPI.updateProducts({ payload, accessToken });
    yield put(actions.updateProductsSuccess());
    yield put(actions.getProductDetailRequest(payload.productId));
  } catch (err) {
    yield put(actions.updateProductsFailure(err));
  }
}
function* handleRemoveProduct({ payload }) {
  try {
    console.log(payload);
    const accessToken = yield select(selector.accessToken);
    yield callAPI.removeProduct({ payload, accessToken });
    yield put(actions.removeProductsSuccess());
    yield put(actions.getProductsRequest());
  } catch (err) {
    yield put(actions.removeProductsFailure(err));
  }
}

const productSaga = [
  takeEvery(GET_PRODUCT_REQUEST, handleGetProduct),
  takeEvery(ADD_PRODUCT_REQUEST, handleAddProduct),
  takeEvery(GET_PRODUCT_DETAIL_REQUEST, handleGetProductDetail),
  takeEvery(UPDATE_PRODUCT_REQUEST, handleUpdateProduct),
  takeEvery(REMOVE_PRODUCT_REQUEST, handleRemoveProduct),
];

export default productSaga;
