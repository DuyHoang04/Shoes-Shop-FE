import { takeEvery, put, select } from "redux-saga/effects";
import { CREATE_ORDER_REQUEST } from "../constants/orderType.js";
import * as actions from "../action/orderAction";
import * as callAPI from "../fetchApi/orderApi";
import * as actionsCart from "../action/cartAction";
import * as selector from "../selectors/index";

function* handleCreateOrder({ payload }) {
  try {
    yield callAPI.createOrderItem(payload);
    const userId = yield select(selector.userId);
    yield put(actions.createOrderSuccess());
    yield put(actionsCart.getCartItemRequest(userId));
  } catch (err) {
    yield put(actions.createOrderFailure(err));
  }
}

const orderSaga = [takeEvery(CREATE_ORDER_REQUEST, handleCreateOrder)];

export default orderSaga;
