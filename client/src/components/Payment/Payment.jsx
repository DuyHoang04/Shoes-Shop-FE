import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Payment = (props) => {
  const { total, orderItems } = props;
  const [infoUser, setInfoUser] = useState({
    phoneNumber: null,
    shippingAddress: null,
    orderItems,
    paymentMethod: null,
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
    const { username, phoneNumber, address } = infoUser;
    if (!username & !phoneNumber || !address) {
      toast.error("Không được bỏ trống ô nào cả nha!", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ValidateForm()) {
    }
  };

  return (
    <>
      <div className="payment">
        <form>
          <div className="paymentTitle">
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
          <select name="paymentMethod" onChange={changeValue}>
            <option value="">Select Payment Method</option>
            <option value="Flash">Flash</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            Hoàn Tất
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
