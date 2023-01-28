import React, { useState } from "react";
import "../styles/index.scss";
import { cartProduct } from "../myData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CardProduct = (props) => {
  const { data, addCartItemRequest, userId, userToken } = props;
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(data?.image[0]?.filePath);
  const [showCard, setShowCard] = useState(false);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const changeImage = (index) => {
    setImage(data?.image[index]?.filePath);
  };

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
      <div className="cardProduct">
        <div className="cardProduct_thumbnail">
          <Link to={`/product/${data?._id}`} state={data?._id}>
            <img src={image} alt="" className="cardProduct_img" />
          </Link>
          <div className="cardProduct_thumbnail-icon">
            <div>
              <Favorite />
            </div>
            <div>
              <ShoppingCart onClick={handleAddCart} />
            </div>
          </div>
        </div>

        <div className="imgSlider">
          <Slider className="slider" {...settings}>
            {data?.image.map((img, index) => (
              <div
                key={index}
                className="slider-item"
                onMouseOver={(e) => changeImage(index)}
              >
                <img src={img?.filePath} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="cardProduct_details">
          {/* <div className="cardProduct_details-container"> */}
          <p className="cardProduct_details-name">{data?.name}</p>
          <p className="cardProduct_details-price">${data?.price}</p>
          {/* </div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
