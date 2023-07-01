import { takeEvery, put, select } from "redux-saga/effects";
import { CREATE_ORDER_REQUEST } from "../constants/orderType.js";
import * as actions from "../action/orderAction";
import * as callAPI from "../fetchApi/orderApi";
import * as actionsCart from "../action/cartAction";
import * as selector from "../selectors/index";

function* handleCreateOrder({ payload }) {
  try {
    const accessToken = yield select(selector.accessToken);
    yield callAPI.createOrderItem({
      orderData: payload.orderData,
      navigate: payload.navigate,
      is_checkout_cart: payload.is_checkout_cart,
      accessToken,
    });
    yield put(actions.createOrderSuccess());
    yield put(actionsCart.getCartItemRequest(accessToken));
  } catch (err) {
    yield put(actions.createOrderFailure(err));
  }
}

const orderSaga = [takeEvery(CREATE_ORDER_REQUEST, handleCreateOrder)];

export default orderSaga;
