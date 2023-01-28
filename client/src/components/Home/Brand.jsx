import React from "react";
import "../../styles/index.scss";
import { BrandItem } from "../../myData.js";

export const Brand = () => {
  return (
    <div className="brand">
      {BrandItem.map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </div>
  );
};
