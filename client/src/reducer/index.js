import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import infoProductReducer from "./infoProductReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  infoProduct: infoProductReducer,
  cart: cartReducer,
});

export default rootReducer;
