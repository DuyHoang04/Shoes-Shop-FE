import React, { useEffect } from "react";
import ProductList from "../components/productList/ProductList";
import { connect } from "react-redux";
import * as actions from "../action/productAction.js";

export const ProductListContainer = (props) => {
  console.log(props);
  const { getProductRequest, productList } = props;
  console.log(productList);
  useEffect(() => {
    getProductRequest();
  }, []);

  return <ProductList productList={productList} />;
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: () => dispatch(actions.getProductsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
