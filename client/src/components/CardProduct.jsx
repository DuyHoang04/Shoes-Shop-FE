import React, { useState } from "react";
import "../styles/index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHostName, toastOptions } from "../util";

export const CardProduct = (props) => {
  const { data, addCartItemRequest, accessToken } = props;
  const [image, setImage] = useState(data?.image[0]?.filePath);
  const [showCard, setShowCard] = useState(false);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const changeImage = (index) => {
    setImage(data?.image[index]?.filePath);
  };

  const handleAddCart = () => {
    if (accessToken) {
      const dataCart = {
        quantity: 1,
      };
      addCartItemRequest({
        dataCart,
        productId: data?.productId,
        decrease: false,
      });
    } else {
      toast.error("PLEASE LOGIN", toastOptions);
    }
  };

  return (
    <>
      <div className="cardProduct">
        <div className="cardProduct_thumbnail">
          <div className="cardProduct_thumbnail-image">
            <Link to={`/product/${data?.productId}`} state={data?.productId}>
              <img
                src={`${getHostName()}/images/${data.image[0].name}`}
                alt=""
                className="cardProduct_img"
              />
            </Link>
          </div>
          <div className="cardProduct_thumbnail-icon">
            <div>
              <Favorite />
            </div>
            <div onClick={handleAddCart}>
              <ShoppingCart />
            </div>
          </div>
        </div>
        <div className="cardProduct_details">
          {/* <div className="cardProduct_details-container"> */}
          <p className="cardProduct_details-name">{data?.name}</p>
          <p className="cardProduct_details-brand">{data?.brand}</p>
          <Rating
            className="cardProduct_details-rating"
            readOnly
            size="small"
            defaultValue={data?.rating}
          />
          <p className="cardProduct_details-price">
            <span>USD</span> {data?.price}
          </p>
          {/* </div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
