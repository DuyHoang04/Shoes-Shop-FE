import React from "react";
import ProductsContainer from "../../container/ProductsContainer";
import "../../styles/index.scss";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredTitle">
        <h1> -FEATURED PRODUCT</h1>
      </div>
      <ProductsContainer />
    </div>
  );
};
