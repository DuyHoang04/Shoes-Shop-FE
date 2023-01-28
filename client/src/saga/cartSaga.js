import { takeEvery, put, select } from "redux-saga/effects";
import {
  ADD_CART_ITEM_REQUEST,
  GET_CART_ITEM_REQUEST,
  HIDE_CART_REQUEST,
  SHOW_CART_REQUEST,
} from "../constants/cartType";
import * as actions from "../action/cartAction";
import * as callAPI from "../fetchApi/cartApi";
import * as selectors from "../selectors/index";

function* handleAddItem({ payload }) {
  console.log(payload);
  try {
    const userId = yield select(selectors.userId);
    const userToken = yield select(selectors.userToken);
    yield callAPI.addCartItem(payload);
    yield put(actions.addCartItemSuccess());
    yield put(actions.getCartItemRequest(userId));
  } catch (err) {
    yield put(actions.addCartItemFailure(err));
  }
}

function* handleGetCartItem({ payload }) {
  console.log(payload);
  try {
    const data = yield callAPI.getCartItem(payload);
    if (data) {
      yield put(actions.getCartItemSuccess(data.orderItems));
    } else {
      yield put(actions.getCartItemSuccess([]));
    }
  } catch (err) {
    yield put(actions.getCartItemFailure(err));
  }
}

function* handleShowCart() {
  try {
    yield put(actions.showCartSuccess(true));
  } catch (err) {
    yield put(actions.showCartFailure(err));
  }
}

function* handleHideCart() {
  try {
    yield put(actions.hideCartSuccess(false));
  } catch (err) {
    yield put(actions.hideCartFailure(err));
  }
}

const cartSaga = [
  takeEvery(ADD_CART_ITEM_REQUEST, handleAddItem),
  takeEvery(GET_CART_ITEM_REQUEST, handleGetCartItem),
  takeEvery(SHOW_CART_REQUEST, handleShowCart),
  takeEvery(HIDE_CART_REQUEST, handleHideCart),
];

export default cartSaga;
