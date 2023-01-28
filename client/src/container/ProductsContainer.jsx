import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../action";
import { CardProduct } from "../components/CardProduct.jsx";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductsContainer = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const productList = useSelector((state) => state.products.productList);
  const {
    getProductRequest,
    isFetching,
    addCartItemRequest,
    userId,
    userToken,
  } = props;

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
            userId={userId}
            userToken={userToken}
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
    // productList: state.products.productList,
    isFetching: state.products.isFetching,
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: () => dispatch(actions.products.getProductRequest()),
    addCartItemRequest: (payload) =>
      dispatch(actions.carts.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
