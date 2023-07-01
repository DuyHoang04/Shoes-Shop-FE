import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as cartActions from "../action/cartAction";
import * as productActions from "../action/productAction";
import { CardProduct } from "../components/CardProduct.jsx";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductsContainer = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const productList = useSelector((state) => state.products.productList);
  const { getProductRequest, isFetching, addCartItemRequest, accessToken } =
    props;

  useEffect(() => {
    if (pathname === "/home") {
      getProductRequest();
    }
  }, []);

  return (
    <div className="cardProductContainer">
      {!isFetching ? (
        productList?.map((product, index) => (
          <CardProduct
            key={index}
            data={product}
            addCartItemRequest={addCartItemRequest}
            accessToken={accessToken}
          />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
    isFetching: state.products.isFetching,
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: () => dispatch(productActions.getProductRequest()),
    addCartItemRequest: (payload) =>
      dispatch(cartActions.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
