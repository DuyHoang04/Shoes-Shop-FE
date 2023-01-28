import React from "react";
import "../../styles/index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardProduct } from "../CardProduct";

export const Sales = (props) => {
  const { productList } = props;
  const settingsSlick = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  };

  return (
    <div className="sales">
      <div className="salesTitle">
        <h1> -TOP SALES</h1>
      </div>
      <div className="salesSlider">
        <Slider {...settingsSlick} className="salesSlider_container">
          {productList?.map((product, index) => (
            <CardProduct key={index} data={product} />
          ))}
        </Slider>{" "}
      </div>
    </div>
  );
};
