import { takeEvery, put } from "redux-saga/effects";
import { ADD_USER_REQUEST, GET_USER_REQUEST } from "../constants/userType";
import * as actions from "../action/userAction";
import * as callAPI from "../fetchApi/userApi";

function* handleGetUser() {
  try {
    const data = yield callAPI.getUser();
    yield put(actions.getUserSuccess(data));
  } catch (err) {
    yield put(actions.getUserFailure(err));
  }
}

// function* handleAddProduct({ payload }) {
//   console.log("VO");
//   try {
//     yield callAPI.addUser(payload);
//     yield put(actions.addProductsSuccess());
//     yield put(actions.getProductsRequest());
//   } catch (err) {
//     yield put(actions.addProductsFailure(err));
//   }
// }

const userSaga = [
  takeEvery(GET_USER_REQUEST, handleGetUser),
  //   takeEvery(ADD_USER_REQUEST, handleAddUser),
];

export default userSaga;
