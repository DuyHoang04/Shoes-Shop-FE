import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Payment } from "../components/Payment/Payment";
import * as orderActions from "../action/orderAction";
import * as cartActions from "../action/cartAction";
import CartContainer from "./CartContainer";
import { CartItem } from "../components/Cart/CartItem";
import TableCart from "../components/Cart/TableCart";
import { useLocation } from "react-router-dom";

const PaymentContainer = (props) => {
  console.log(useLocation().state);
  const { dataOrder, is_checkout_cart } = useLocation().state;
  const {
    createOrderRequest,
    getCartItemRequest,
    addCartItemRequest,
    accessToken,
    cartItem,
  } = props;

  const totalCart = dataOrder.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    const fetchData = async () => {
      await getCartItemRequest();
    };
    fetchData();
  }, []);

  return (
    <div className="payment">
      <div className="payment__title">
        <h1>Thanh Toán</h1>
      </div>
      <div className="payment__container">
        <div className="listCart_container">
          <TableCart data={dataOrder} />
        </div>
        <Payment
          total={totalCart}
          orderItems={dataOrder}
          is_checkout_cart={is_checkout_cart}
          // orderItems={data.cartItem}
          createOrderRequest={createOrderRequest}
          accessToken={accessToken}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
    cartItem: state.cart.cartItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrderRequest: (payload) =>
      dispatch(orderActions.createOrderRequest(payload)),
    getCartItemRequest: (payload) =>
      dispatch(cartActions.getCartItemRequest(payload)),
    addCartItemRequest: (payload) =>
      dispatch(cartActions.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
