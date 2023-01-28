import React from "react";
import { connect } from "react-redux";
import { Payment } from "../components/Payment/Payment";
import * as actions from "../action/orderAction";

const PaymentContainer = (props) => {
  const { data, createOrderRequest, userId, userToken } = props;
  console.log(data);
  return (
    <Payment
      total={data.total}
      orderItems={data.cartItem}
      createOrderRequest={createOrderRequest}
      userId={userId}
      userToken={userToken}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrderRequest: (payload) =>
      dispatch(actions.createOrderRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
