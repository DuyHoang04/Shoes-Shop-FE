import React from "react";
import { connect } from "react-redux";
import { Cart } from "../components/Cart/Cart";
import * as cartActions from "../action/cartAction";
import { useEffect } from "react";
import { accessToken } from "../selectors";

export const CartContainer = (props) => {
  const {
    getCartItemRequest,
    cartItem,
    hideCartRequest,
    addCartItemRequest,
    accessToken,
  } = props;

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {
        await getCartItemRequest();
      };
      fetchData();
    }
  }, []);

  return (
    <Cart
      accessToken={accessToken}
      cartItem={cartItem}
      hideCartRequest={hideCartRequest}
      addCartItemRequest={addCartItemRequest}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.cartItem,
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItemRequest: (payload) =>
      dispatch(cartActions.getCartItemRequest(payload)),
    hideCartRequest: () => dispatch(cartActions.hideCartRequest()),
    addCartItemRequest: (payload) =>
      dispatch(cartActions.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
