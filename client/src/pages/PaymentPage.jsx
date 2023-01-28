import React, { useEffect } from "react";
import PaymentContainer from "../container/PaymentContainer";
import { useLocation } from "react-router-dom";

export const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { state } = useLocation();
  return <PaymentContainer data={state} />;
};
