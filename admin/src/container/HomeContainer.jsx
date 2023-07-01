import React from "react";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import { userData } from "../dummyData";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { connect } from "react-redux";
import * as userActions from "../action/userAction";
import * as orderActions from "../action/orderAction";
import { useEffect } from "react";
import { getDataReverseAndLimit } from "../util";

export const HomeContainer = (props) => {
  const { getUserRequest, getAllOrderRequest, userList, orderList } = props;

  useEffect(() => {
    const fetchData = async () => {
      await getUserRequest();
      await getAllOrderRequest();
    };
    fetchData();
  }, []);

  return (
    <div style={{ flex: 4 }}>
      <FeaturedInfo />
      <div style={{ display: "flex", margin: "20px" }}>
        <WidgetSm userList={getDataReverseAndLimit(userList)} />
        <WidgetLg />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList,
    orderList: state.orders.orderList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserRequest: () => dispatch(userActions.getUserRequest()),
    getAllOrderRequest: () => dispatch(orderActions.getAllOrderRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
