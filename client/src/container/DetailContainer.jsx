import React, { useEffect } from "react";
import { DetailInfo } from "../components/Detail/DetailInfo";
import { DetailReview } from "../components/Detail/DetailReview";
import { connect } from "react-redux";
import * as infoProductActions from "../action/InfoProductAction";
import * as cartActions from "../action/cartAction";
import * as orderActions from "../action/orderAction";

const DetailContainer = (props) => {
  const {
    id,
    getInfoProduct,
    product,
    addCartItemRequest,
    addCommentRequest,
    accessToken,
    isFetching,
    createOrderRequest,
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      await getInfoProduct(id);
    };
    fetchData();
  }, [id]);

  return (
    <div className="detail">
      <div className="detailContainer">
        {!isFetching ? (
          <>
            <DetailInfo
              data={product}
              addCartItemRequest={addCartItemRequest}
              accessToken={accessToken}
              createOrderRequest={createOrderRequest}
            />
            {/* DECS AND REVIEW */}
            <DetailReview
              accessToken={accessToken}
              data={product}
              addCommentRequest={addCommentRequest}
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
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfoProduct: (payload) =>
      dispatch(infoProductActions.getInfoProductRequest(payload)),
    addCartItemRequest: (payload) =>
      dispatch(cartActions.addCartItemRequest(payload)),
    addCommentRequest: (payload) =>
      dispatch(infoProductActions.addCommentProductRequest(payload)),
    createOrderRequest: (payload) =>
      dispatch(orderActions.createOrderRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
