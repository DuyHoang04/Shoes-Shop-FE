import React, { useEffect } from "react";
import Product from "../components/product/Product";
import { connect } from "react-redux";
import * as productAction from "../action/productAction";
import * as brandAction from "../action/brandAction";
import { useLocation } from "react-router-dom";

export const ProductContainer = (props) => {
  const productId = useLocation().pathname.slice(9, 10000);
  const {
    getProductDetail,
    productDetail,
    brandList,
    getBrand,
    updateProduct,
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      await getProductDetail(productId);
      await getBrand();
    };
    fetchData();
  }, [getProductDetail, getBrand, productId]);

  return (
    <Product
      productId={productId}
      data={productDetail}
      brandList={brandList}
      updateProductRequest={updateProduct}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    productDetail: state.products.productDetail,
    brandList: state.brands.brandList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (payload) =>
      dispatch(productAction.getProductDetailRequest(payload)),
    getBrand: () => dispatch(brandAction.getBrandsRequest()),
    updateProduct: (payload) =>
      dispatch(productAction.updateProductsRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
