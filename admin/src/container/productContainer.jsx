import React from "react";
import Product from "../components/product/Product";

import { connect } from "react-redux";

export const productContainer = (props) => {
  return <Product />;
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(productContainer);
