import { takeEvery, put } from "redux-saga/effects";
import {
  GET_INFO_PRODUCT_REQUEST,
  ADD_COMMENT_PRODUCT_REQUEST,
} from "../constants/InfoProductType.js";
import * as actions from "../action/InfoProductAction";
import * as callAPI from "../fetchApi/productApi";
import * as selector from "../selectors/index";

function* handleGetInfoProduct({ payload }) {
  try {
    const data = yield callAPI.getInfoProduct(payload);
    yield put(actions.getInfoProductSuccess(data));
  } catch (err) {
    yield put(actions.getInfoProductFailure(err));
  }
}

function* handleAddCommentProduct({ payload }) {
  try {
    yield callAPI.addCommentProduct(payload);
    yield put(actions.addCommentProductSuccess());
    yield put(actions.getInfoProductRequest(payload.idProduct));
  } catch (err) {
    yield put(actions.addCommentProductFailure(err));
  }
}

const infoProductSaga = [
  takeEvery(GET_INFO_PRODUCT_REQUEST, handleGetInfoProduct),
  takeEvery(ADD_COMMENT_PRODUCT_REQUEST, handleAddCommentProduct),
];

export default infoProductSaga;
