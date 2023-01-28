import React, { useState } from "react";
import { itemFilter } from "../../myData";

export const SideBar = (props) => {
  const { setLowPrice, setHighPrice, setBrand } = props;
  const [idChecked, setIdChecked] = useState(null);
  const [indexBrand, setIndexBrand] = useState(null);
  const brands = ["Nike", "Jordan", "Adidas"];

  const handleClick = (index, lowPrice, highPrice) => {
    setIdChecked(index);
    setLowPrice(lowPrice);
    setHighPrice(highPrice);
  };

  const handleBrand = (brand, index) => {
    setIndexBrand(index);
    setBrand(brand);
  };

  return (
    <div className="sidebar">
      <div className="sidebarBrand">
        <div className="sidebarBrand_title">SHOE BRAND</div>
        <div className="sidebarBrand_Item">
          {brands.map((brand, index) => (
            <p
              key={index}
              onClick={(e) => handleBrand(brand, index)}
              className={`${indexBrand === index && "active"}`}
            >
              {brand}
            </p>
          ))}
        </div>
      </div>
      <div className="deliver"></div>
      <div className="sidebarFilter">
        <div className="sidebarFilter_title">Filter of price</div>
        <div className="sidebarFilter_content">
          <ul>
            {itemFilter.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => handleClick(index, item.low, item.high)}
                  checked={idChecked === index ? true : false}
                />
                <label>
                  {item.low} - {item.high}$
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
