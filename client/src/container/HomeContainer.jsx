import React from "react";
import { Featured } from "../components/Home/Featured";
import { Sliders } from "../components/Home/Slider/Sliders";
import { Banner } from "../components/Home/Banner";
import { Sales } from "../components/Home/Sales";
import { Testimonial } from "../components/Home/Testimonial";
import { Brand } from "../components/Home/Brand";
import { HomeContact } from "../components/Home/HomeContact";
import { connect } from "react-redux";

const HomeContainer = (props) => {
  const { productList } = props;
  return (
    <div style={{ overflow: "hidden" }}>
      <Sliders />
      <div>
        <Featured />
      </div>
      <Banner />
      <Sales productList={productList} />
      <Testimonial />
      <Brand />
      <HomeContact />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
