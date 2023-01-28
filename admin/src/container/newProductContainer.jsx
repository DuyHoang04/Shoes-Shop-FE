import React from "react";
import { connect } from "react-redux";
import NewProduct from "../components/newProduct/NewProduct";
import * as actions from "../action/productAction";

export const newProductContainer = (props) => {
  const { addProductRequest } = props;
  return <NewProduct addProductRequest={addProductRequest} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addProductRequest: (payload) =>
      dispatch(actions.addProductsRequest(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newProductContainer);
