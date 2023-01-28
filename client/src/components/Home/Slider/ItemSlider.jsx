import React from "react";
import "../../../styles/index.scss";
import { ArrowForwardIos } from "@mui/icons-material";

export const ItemSlider = ({ data }) => {
  return (
    <div className="itemSliderContainer">
      <img src={data.background} alt="" />
      <div className="itemSlider_info">
        <div
          className="itemSlider_info-caption-1"
          style={{ color: `${data.colorText}` }}
        >
          <strong>{data.strong_desc}</strong>
          <h1>{data.title}</h1>
        </div>
        <div
          className="divider"
          style={{ backgroundColor: `${data.colorDivider}` }}
        ></div>
        <div className="itemSlider_info-caption-2">
          <h1 style={{ color: `${data.colorCaption}` }}>{data.caption}</h1>
        </div>
        <div className="itemSlider_info-caption-3">
          <p style={{ color: `${data.colorText}` }}>{data.desc}</p>
        </div>
        <button
          className="itemSlider_info-btn"
          style={{
            backgroundColor: `${data.colorBtn}`,
            color: `${data.colorTextBtn}`,
          }}
        >
          Mua Ngay <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};
