import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewProduct from "../components/newProduct/NewProduct";
import * as productAction from "../action/productAction.js";
import * as brandAction from "../action/brandAction";

export const NewProductContainer = (props) => {
  const { addProductRequest, getBrandsRequest, brandList } = props;

  useEffect(() => {
    getBrandsRequest();
  }, []);

  return (
    <NewProduct addProductRequest={addProductRequest} brandList={brandList} />
  );
};

const mapStateToProps = (state) => {
  return {
    brandList: state.brands.brandList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductRequest: (payload) =>
      dispatch(productAction.addProductsRequest(payload)),
    getBrandsRequest: () => dispatch(brandAction.getBrandsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductContainer);
