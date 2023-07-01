import React, { useState } from "react";
import { itemFilter } from "../../myData";
import "../../styles/index.scss";

export const SideBar = (props) => {
  const { setMinPrice, setMaxPrice, setBrandId, brandList } = props;
  const [idChecked, setIdChecked] = useState(null);
  const [indexBrand, setIndexBrand] = useState(null);

  const handleClick = (index, lowPrice, highPrice) => {
    setIdChecked(index);
    setMinPrice(lowPrice);
    setMaxPrice(highPrice);
  };

  const handleBrand = (brandId, index) => {
    setIndexBrand(index);
    setBrandId(brandId);
  };

  return (
    <div className="sidebar">
      <div className="sidebarBrand">
        <div className="sidebarBrand_title">SHOE BRAND</div>
        <div className="sidebarBrand_Item">
          {brandList.map((brand, index) => (
            <p
              key={index}
              onClick={(e) => handleBrand(brand.brandId, index)}
              className={`${indexBrand === index && "active"}`}
            >
              {brand.name}
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
