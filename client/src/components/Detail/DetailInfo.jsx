import React, { useState } from "react";
import { Rating } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHostName, toastOptions } from "../../util";
import { useNavigate } from "react-router-dom";

export const DetailInfo = (props) => {
  const { data, addCartItemRequest, accessToken, createOrderRequest } = props;
  const [indexImg, setIndexImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const setAmount = (action) => {
    if (action === "plus") {
      setQuantity(quantity + 1);
    }
    if (action === "minus") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const changeValue = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddCart = () => {
    if (accessToken) {
      const dataCart = {
        quantity,
      };
      addCartItemRequest({ dataCart, productId: data.productId });
    } else {
      toast.error("PLEASE LOGIN", toastOptions);
    }
  };

  const handleOrder = () => {
    const dataOrder = { ...data, quantity };
    if (accessToken) {
      navigate("/payment", {
        state: { dataOrder: [dataOrder], is_checkout_cart: false },
      });
    } else {
      toast.error("PLEASE LOGIN", toastOptions);
    }
  };

  return (
    <>
      <div className="detailInfo">
        <div className="detailInfo_image">
          <div className="detailInfo_image-sub">
            {data?.image?.map((img, index) => (
              <img
                key={index}
                className={indexImg === index ? "active" : ""}
                onClick={(e) => setIndexImage(index)}
                src={`${getHostName()}/images/${img?.name}`}
                alt=""
              />
            ))}
          </div>
          <div className="detailInfo_image-main">
            {data?.image && data.image.length > 0 && (
              <img
                src={`${getHostName()}/images/${data.image[indexImg].name}`}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="detailInfo_item">
          <div className="detailInfo_item-review">
            <Rating
              name="half-rating-read"
              defaultValue={data?.rating}
              readOnly
            />
            <p>{data?.num_reviews} review </p>
          </div>
          <div className="detailInfo_item-name">
            <p>{data?.name}</p>
            <div className="detailInfo_item-brand">Nike</div>
          </div>
          <div className="detailInfo_item-price">${data.price}.00</div>
          <div className="detailInfo_item-overview">
            <div className="detailInfo_item-overviewTitle">Quick Overview:</div>
            <div className="detailInfo_item-overviewDecs">
              {data?.description}
            </div>
          </div>
          <div className="detailInfo_item-size">1</div>
          <div className="detailInfo_item-count">
            <div className="cartForm">
              <input type="number" value={quantity} onChange={changeValue} />
              <div className="cartForm_icons">
                <button className="icon" onClick={(e) => setAmount("plus")}>
                  <KeyboardArrowUp />
                </button>
                <button className="icon" onClick={(e) => setAmount("minus")}>
                  <KeyboardArrowDown />
                </button>
              </div>
            </div>
          </div>

          <div className="detailInfo_item-button">
            <button onClick={handleAddCart}>Add to Cart</button>
            <button onClick={handleOrder}>Pay Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
