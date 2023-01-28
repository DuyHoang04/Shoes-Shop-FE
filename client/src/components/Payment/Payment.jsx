import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Payment = (props) => {
  const navigate = useNavigate();
  const { total, orderItems, userId, userToken, createOrderRequest } = props;
  const [infoUser, setInfoUser] = useState({
    phoneNumber: null,
    shippingAddress: null,
    orderItems,
    paymentMethods: null,
    shippingPrice: 0,
    totalPrice: total,
  });

  console.log(infoUser);

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const changeValue = (e) => {
    setInfoUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ValidateForm = () => {
    const { phoneNumber, shippingAddress, paymentMethods } = infoUser;
    if (!shippingAddress & !phoneNumber || !paymentMethods) {
      toast.error("Không được bỏ trống ô nào nha!", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ValidateForm()) {
      createOrderRequest({ infoUser, userToken });
      navigate("/home");
    }
  };

  return (
    <>
      <div className="payment">
        <form className="paymentForm">
          <div className="paymentForm__title">
            <h1>Thanh Toán</h1>
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={changeValue}
          />
          <input
            type="text"
            placeholder="Address"
            name="shippingAddress"
            onChange={changeValue}
          />
          <select name="paymentMethods" onChange={changeValue}>
            <option value="">Select Payment Method</option>
            <option value="Flash">Flash</option>
          </select>
          <span></span>
          <div className="paymentForm__total">
            <div className="paymentForm__total-ship">
              <h1>Ship:</h1>
              <h1>Free</h1>
            </div>
            <div className="paymentForm__total-total">
              <h1>Total:</h1>
              <h1>${total}</h1>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
