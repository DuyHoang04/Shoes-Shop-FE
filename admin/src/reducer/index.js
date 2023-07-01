import { combineReducers } from "redux";
import authReducer from "./authReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
  auth: authReducer,
  brands: brandReducer,
  orders: orderReducer,
});

export default rootReducer;
