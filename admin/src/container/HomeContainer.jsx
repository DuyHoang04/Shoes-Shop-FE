import React from "react";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import { userData } from "../dummyData";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { connect } from "react-redux";
import * as actions from "../action/userAction";
import { useEffect } from "react";

export const HomeContainer = (props) => {
  const { getUser } = props;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ flex: 4 }}>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div style={{ display: "flex", margin: "20px" }}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(actions.getUserRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
