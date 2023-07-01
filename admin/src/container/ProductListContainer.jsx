import React, { useEffect } from "react";
import ProductList from "../components/productList/ProductList";
import { connect } from "react-redux";
import * as productAction from "../action/productAction.js";

export const ProductListContainer = (props) => {
  console.log(props);
  const { getProductRequest, productList, removeProduct } = props;

  useEffect(() => {
    const fetchDataProduct = async () => {
      await getProductRequest();
    };
    fetchDataProduct();
  }, [getProductRequest]);

  return (
    <ProductList
      productList={productList}
      removeProductRequest={removeProduct}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: () => dispatch(productAction.getProductsRequest()),
    removeProduct: (payload) =>
      dispatch(productAction.removeProductsRequest(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
