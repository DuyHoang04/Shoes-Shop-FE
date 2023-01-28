import React from "react";
import "../../../styles/index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemSlider } from "./ItemSlider";
import { SliderData } from "../../../myData";

export const Sliders = () => {
  const settingsSlick = {
    infinite: true,
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider">
      <Slider {...settingsSlick}>
        {SliderData.map((item, index) => (
          <ItemSlider key={index} data={item} />
        ))}
      </Slider>{" "}
    </div>
  );
};
