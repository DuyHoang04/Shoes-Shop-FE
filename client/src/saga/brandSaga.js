import { takeEvery, put } from "redux-saga/effects";
import * as actions from "../action/brandAction";
import * as callAPI from "../fetchApi/brandApi";
import { GET_BRAND_REQUEST } from "../constants/brandType";

function* handleGetBrand() {
  try {
    const { data } = yield callAPI.getAllBrand();
    yield put(actions.getBrandsSuccess(data));
  } catch (err) {
    yield put(actions.getBrandsFailure(err.message));
  }
}

const brandSaga = [takeEvery(GET_BRAND_REQUEST, handleGetBrand)];

export default brandSaga;
