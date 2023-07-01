import { takeEvery, put } from "redux-saga/effects";
import * as actions from "../action/orderAction";
import * as callAPI from "../fetchApi/orderApi";
import { GET_ALL_ORDER_REQUEST } from "../constants/orderType";

function* handleGetAllOrder() {
  console.log("Vo");
  try {
    const { data } = yield callAPI.getAllOrder();
    yield put(actions.getAllOrderSuccess(data));
  } catch (err) {
    yield put(actions.getAllOrderFailure(err.message));
  }
}

const orderSaga = [takeEvery(GET_ALL_ORDER_REQUEST, handleGetAllOrder)];

export default orderSaga;
