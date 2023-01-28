import React from "react";
import Background from "../../img/parallax.jpg";
import { testimonialData } from "../../myData.js";
import { Rating, Avatar } from "@mui/material";
import "../../styles/index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  const settingsSlick = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial">
      <img src={Background} alt="" />
      <div className="testimonialItem">
        <Slider {...settingsSlick} className="testimonialItem_slider">
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonialItem_container">
              <div className="testimonialItem_avatar">
                <img src={item.avatar} alt="" />
              </div>
              <Rating
                className="testimonialItem_rating"
                name="half-rating-read"
                defaultValue={item.rating}
                size="small"
                readOnly
              />
              <div className="testimonialItem_name">{item.name}</div>
              <p className="testimonialItem_decs">" {item.desc} "</p>
            </div>
          ))}
        </Slider>{" "}
      </div>
    </div>
  );
};
