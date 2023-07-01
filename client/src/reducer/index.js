import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import infoProductReducer from "./infoProductReducer";
import productReducer from "./ProductReducer";
import orderReducer from "./orderReducer";
import brandReducer from "./brandReducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  infoProduct: infoProductReducer,
  cart: cartReducer,
  order: orderReducer,
  brands: brandReducer,
});

export default rootReducer;
