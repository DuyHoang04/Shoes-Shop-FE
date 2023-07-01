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
  console.log(payload, "PAYLOAD");
  try {
    const accessToken = yield select(selectors.accessToken);
    yield callAPI.addCartItem({ payload, accessToken });
    yield put(actions.addCartItemSuccess());
    yield put(actions.getCartItemRequest());
  } catch (err) {
    yield put(actions.addCartItemFailure(err));
  }
}

function* handleGetCartItem({ payload }) {
  try {
    const accessToken = yield select(selectors.accessToken);
    const { data } = yield callAPI.getCartItem(accessToken);
    if (data) {
      yield put(actions.getCartItemSuccess(data));
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
