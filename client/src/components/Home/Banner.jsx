import React from "react";
import "../../styles/index.scss";
import Banner1 from "../../img/home-banner-1.png";
import Banner2 from "../../img/home-banner-2.png";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_container">
        <img src={Banner1} alt="" />
        <img src={Banner2} alt="" />
      </div>
    </div>
  );
};
