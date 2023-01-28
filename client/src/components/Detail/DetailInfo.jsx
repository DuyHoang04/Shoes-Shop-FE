import React, { useState } from "react";
import { cartProduct } from "../../myData";
import { Rating } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DetailInfo = (props) => {
  const { data, addCartItemRequest, userId, userToken } = props;
  const [indexImg, setIndexImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

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

  console.log(quantity);

  const handleAddCart = () => {
    if (userId) {
      const cartItem = {
        name: data?.name,
        quantity,
        image: data?.image[0].filePath,
        price: data?.price,
        product: data?._id,
      };
      addCartItemRequest({ userId, cartItem, userToken });
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
                src={`http://localhost:8080/${img?.filePath}`}
                alt=""
              />
            ))}
          </div>
          <div className="detailInfo_image-main">
            <img
              src={`http://localhost:8080/${data?.image[indexImg]?.filePath}`}
              alt=""
            />
          </div>
        </div>
        <div className="detailInfo_item">
          <div className="detailInfo_item-review">
            <Rating
              name="half-rating-read"
              defaultValue={data?.rating}
              readOnly
            />
            <p>{data?.numReviews} review </p>
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
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
