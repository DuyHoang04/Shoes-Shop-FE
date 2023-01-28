import React from "react";
import { connect } from "react-redux";
import { Payment } from "../components/Payment/Payment";

const PaymentContainer = (props) => {
  const { data } = props;
  console.log(data);
  return <Payment total={data.total} orderItems={data.cartItem} />;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
