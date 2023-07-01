import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toastOptions } from "../../util";

export const Payment = (props) => {
  const navigate = useNavigate();
  const {
    total,
    orderItems,
    createOrderRequest,
    accessToken,
    is_checkout_cart,
  } = props;
  const [infoUser, setInfoUser] = useState({
    contactNumber: null,
    fullName: null,
    fullAddress: null,
  });

  const changeValue = (e) => {
    setInfoUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ValidateForm = () => {
    const { contactNumber, fullName, fullAddress } = infoUser;
    if (!contactNumber & !fullName || !fullAddress) {
      toast.error("Không được bỏ trống ô nào nha!", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (accessToken) {
      const orderProductQuantityList = [];
      for (let i = 0; i < orderItems.length; i++) {
        orderProductQuantityList.push({
          productId: orderItems[i].productId,
          quantity: orderItems[i].quantity,
        });
      }

      const orderData = {
        ...infoUser,
        orderProductQuantityList,
      };
      if (ValidateForm()) {
        createOrderRequest({ orderData, navigate, is_checkout_cart });
      }
    }
  };

  return (
    <>
      <form className="paymentForm">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={changeValue}
        />
        <input
          type="text"
          placeholder="Full Address"
          name="fullAddress"
          onChange={changeValue}
        />
        <input
          type="text"
          placeholder="Contact Number"
          name="contactNumber"
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

      <ToastContainer />
    </>
  );
};
