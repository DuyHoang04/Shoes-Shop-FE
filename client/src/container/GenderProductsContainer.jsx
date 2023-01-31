import React, { useState } from "react";
import { Collection } from "../components/GenderProduct/Collection";
import { SideBar } from "../components/GenderProduct/SideBar";
import { connect } from "react-redux";
import * as actions from "../action/productAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GenderProductsContainer = (props) => {
  const location = useLocation();
  const tag = location.pathname.slice(1, 7);
  console.log(tag);
  const { getProductFilter, activePage, totalPage } = props;
  const [page, setPage] = useState(1);
  const [lowPrice, setLowPrice] = useState(null);
  const [highPrice, setHighPrice] = useState(null);
  const [brand, setBrand] = useState("");

  // console.log(lowPrice);
  // console.log(highPrice);

  useEffect(() => {
    getProductFilter({ page, tag, brand, lowPrice, highPrice });
  }, [page, tag, brand, highPrice, lowPrice]);

  return (
    <div className="gender">
      <SideBar
        setHighPrice={setHighPrice}
        setLowPrice={setLowPrice}
        setBrand={setBrand}
      />
      <Collection
        activePage={activePage}
        totalPage={totalPage}
        setPage={setPage}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
    activePage: state.products.activePage,
    totalPage: state.products.totalPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductFilter: (payload) =>
      dispatch(actions.getProductFilterRequest(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderProductsContainer);
