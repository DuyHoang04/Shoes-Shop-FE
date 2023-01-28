import React from "react";
import PaymentContainer from "../container/PaymentContainer";
import { useLocation } from "react-router-dom";

export const PaymentPage = () => {
  const { state } = useLocation();
  return <PaymentContainer data={state} />;
};
