import React, { useState } from "react";
import "../../styles/index.scss";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { CardProduct } from "../CardProduct";

export const Sales = (props) => {
  const { productList, accessToken, addCartItemRequest } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [currentPosition, setCurrentPosition] = useState(0);

  window.addEventListener("resize", () => setIsMobile(window.innerWidth));

  const handlePrev = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleNext = () => {
    if (isMobile < 768) {
      if (currentPosition < productList.length - 2) {
        setCurrentPosition(currentPosition + 1);
      }
    } else {
      if (currentPosition < productList.length - 4) {
        setCurrentPosition(currentPosition + 1);
      }
    }
  };

  return (
    <div className="sales">
      <div className="salesTitle">
        <h1> -TOP SALES</h1>
        <div className="buttonContainer">
          <button onClick={handlePrev}>
            <ArrowBack /> Prev
          </button>
          <button onClick={handleNext}>
            Next <ArrowForward />
          </button>
        </div>
      </div>
      <div className="slider">
        <div className="slider-container">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentPosition * 340}px)` }}
          >
            {productList?.map((product, index) => (
              <div className="card-product" key={index}>
                <CardProduct
                  data={product}
                  accessToken={accessToken}
                  addCartItemRequest={addCartItemRequest}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
