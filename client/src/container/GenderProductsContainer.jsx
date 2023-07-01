import React, { useState } from "react";
import { Collection } from "../components/GenderProduct/Collection";
import { SideBar } from "../components/GenderProduct/SideBar";
import { connect } from "react-redux";
import * as productActions from "../action/productAction";
import * as brandAction from "../action/brandAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GenderProductsContainer = (props) => {
  const location = useLocation();
  const tag = location.pathname.slice(1, 7);
  console.log(tag);
  const {
    getProductFilter,
    activePage,
    totalPage,
    getBrandRequest,
    brandList,
  } = props;
  const [page, setPage] = useState(1);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [brandId, setBrandId] = useState(null);

  useEffect(() => {
    const filterData = {
      page,
      tag,
      brandId,
      minPrice,
      maxPrice,
    };
    const fetchData = async () => {
      getProductFilter(filterData);
      getBrandRequest();
    };
    fetchData();
  }, [page, tag, brandId, minPrice, maxPrice]);

  return (
    <div className="gender">
      <SideBar
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setBrandId={setBrandId}
        brandList={brandList}
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
    brandList: state.brands.brandList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductFilter: (payload) =>
      dispatch(productActions.getProductFilterRequest(payload)),
    getBrandRequest: () => dispatch(brandAction.getBrandsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderProductsContainer);
