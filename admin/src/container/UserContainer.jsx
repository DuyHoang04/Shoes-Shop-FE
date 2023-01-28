import React from "react";
import User from "../components/user/User";
import { connect } from "react-redux";

export const UserContainer = (props) => {
  return <User />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
