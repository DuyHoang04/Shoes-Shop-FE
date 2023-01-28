import React from "react";
import { CardProduct } from "../CardProduct";
import { Pagination } from "@mui/material";

export const Search = (props) => {
  const {
    totalPage,
    activePage,
    totalProduct,
    productList,
    textName,
    setPage,
    addCartItemRequest,
    userId,
    userToken,
    isFetching,
  } = props;

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <div className="search">
        <div className="searchContainer">
          <div className="searchContainer__title">
            <h1>
              {totalProduct} result "{textName}"
            </h1>
          </div>
          <div className="searchContainer__product">
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
          <div className="searchContainer__pagination"></div>
          <Pagination
            count={totalPage}
            page={activePage}
            color="primary"
            sx={{
              color: "red",
            }}
            onChange={handleChangePage}
          />
        </div>
      </div>
    </>
  );
};
