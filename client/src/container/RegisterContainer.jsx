import React from "react";
import { connect } from "react-redux";
import { Register } from "../components/Auth/Register";
import * as actions from "../action/authAction";

const RegisterContainer = (props) => {
  const { registerRequest, notice } = props;
  return <Register registerRequest={registerRequest} notice={notice} />;
};

const mapStateToProps = (state) => {
  return {
    notice: state.auth.notice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (payload) => dispatch(actions.registerRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
