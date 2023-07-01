import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Search } from "../components/Search/Search";
import * as productActions from "../action/productAction";
import * as cartActions from "../action/cartAction";
import { useState } from "react";

const SearchContainer = (props) => {
  const {
    textName,
    getSearchProduct,
    addCartItemRequest,
    isFetching,
    activePage,
    totalPage,
    totalProduct,
    productList,
    userId,
    userToken,
  } = props;
  const [page, setPage] = useState(1);
  useEffect(() => {
    getSearchProduct({ textName, page });
  }, [page, textName]);
  return (
    <Search
      isFetching={isFetching}
      activePage={activePage}
      totalPage={totalPage}
      productList={productList}
      totalProduct={totalProduct}
      textName={textName}
      setPage={setPage}
      addCartItemRequest={addCartItemRequest}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.products.isFetching,
    activePage: state.products.activePage,
    totalPage: state.products.totalPage,
    productList: state.products.productList,
    totalProduct: state.products.totalProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchProduct: (payload) =>
      dispatch(productActions.getSearchProductRequest(payload)),
    addCartItemRequest: (payload) =>
      dispatch(cartActions.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
