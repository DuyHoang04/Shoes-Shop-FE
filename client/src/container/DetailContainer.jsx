import React, { useEffect } from "react";
import { DetailInfo } from "../components/Detail/DetailInfo";
import { DetailReview } from "../components/Detail/DetailReview";
import { connect } from "react-redux";
import * as actions from "../action";

const DetailContainer = (props) => {
  const {
    id,
    getInfoProduct,
    product,
    addCartItemRequest,
    addCommentRequest,
    userId,
    userToken,
    isFetching,
  } = props;

  useEffect(() => {
    getInfoProduct(id);
  }, []);

  return (
    <div className="detail">
      <div className="detailContainer">
        {!isFetching ? (
          <>
            <DetailInfo
              data={product}
              addCartItemRequest={addCartItemRequest}
              userId={userId}
              userToken={userToken}
            />
            {/* DECS AND REVIEW */}
            <DetailReview
              data={product}
              addCommentRequest={addCommentRequest}
              userToken={userToken}
              userId={userId}
            />
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.infoProduct.isFetching,
    product: state.infoProduct.product,
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfoProduct: (payload) =>
      dispatch(actions.infoProducts.getInfoProductRequest(payload)),
    addCartItemRequest: (payload) =>
      dispatch(actions.carts.addCartItemRequest(payload)),
    addCommentRequest: (payload) =>
      dispatch(actions.infoProducts.addCommentProductRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
