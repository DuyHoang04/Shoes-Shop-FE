import React, { useEffect } from "react";
import { Featured } from "../components/Home/Featured";
import { Sliders } from "../components/Home/Slider/Sliders";
import { Banner } from "../components/Home/Banner";
import { Sales } from "../components/Home/Sales";
import { Testimonial } from "../components/Home/Testimonial";
import { Brand } from "../components/Home/Brand";
import { HomeContact } from "../components/Home/HomeContact";
import { connect } from "react-redux";
import * as cartAction from "../action/cartAction";

const HomeContainer = (props) => {
  const { productList, accessToken, addCartItemRequest, getCartItemRequest } =
    props;

  useEffect(() => {
    const fetchData = async () => {
      await getCartItemRequest(accessToken);
    };
    fetchData();
  }, [accessToken]);
  return (
    <div style={{ overflow: "hidden" }}>
      <Sliders />
      <div>
        <Featured />
      </div>
      <Banner />
      <Sales
        productList={productList}
        addCartItemRequest={addCartItemRequest}
        accessToken={accessToken}
      />
      <Testimonial />
      <Brand />
      <HomeContact />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItemRequest: (payload) =>
      dispatch(cartAction.addCartItemRequest(payload)),
    getCartItemRequest: (payload) =>
      dispatch(cartAction.getCartItemRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
