import React from "react";
import { connect } from "react-redux";
import { Cart } from "../components/Cart/Cart";
import * as actions from "../action";
import { useEffect } from "react";

export const CartContainer = (props) => {
  const {
    getCartItemRequest,
    cartItem,
    hideCartRequest,
    addCartItemRequest,
    userId,
    userToken,
  } = props;

  useEffect(() => {
    if (userId) {
      getCartItemRequest(userId);
    }
  }, []);

  return (
    <Cart
      cartItem={cartItem}
      hideCartRequest={hideCartRequest}
      addCartItemRequest={addCartItemRequest}
      userId={userId}
      userToken={userToken}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.cartItem,
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItemRequest: (payload) =>
      dispatch(actions.carts.getCartItemRequest(payload)),
    hideCartRequest: () => dispatch(actions.carts.hideCartRequest()),
    addCartItemRequest: (payload) =>
      dispatch(actions.carts.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
