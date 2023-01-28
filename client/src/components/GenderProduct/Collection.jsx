import React from "react";
import { ProductsContainer } from "../../container/ProductsContainer.jsx";
import { bannerCollection } from "../../myData.js";
import "../../styles/index.scss";
import { Pagination } from "@mui/material";

export const Collection = (props) => {
  const { activePage, totalPage, setPage } = props;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="collection">
      <div className="collection_banner">
        {bannerCollection.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
      <div className="collection_options">
        <select className="collection_options-sort">
          <option value="manual">Featured</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-price-descending">Price, high to low</option>
          <option value="created-descending">Date, new to old</option>
          <option value="created-ascending">Date, old to new</option>
        </select>
      </div>
      <div className="collection_products">
        <ProductsContainer />
        <Pagination
          count={totalPage}
          page={activePage}
          color="primary"
          sx={{
            color: "red",
          }}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};
