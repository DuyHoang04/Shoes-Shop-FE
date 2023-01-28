import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Search } from "../components/Search/Search";
import * as actions from "../action/productAction";
import * as actionsCart from "../action/cartAction";
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
      userId={userId}
      userToken={userToken}
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
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchProduct: (payload) =>
      dispatch(actions.getSearchProductRequest(payload)),
    addCartItemRequest: (payload) =>
      dispatch(actionsCart.addCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
