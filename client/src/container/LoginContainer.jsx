import { Login } from "../components/Auth/Login";
import React from "react";
import { connect } from "react-redux";
import * as authActions from "../action/authAction";

const LoginContainer = (props) => {
  const { loginRequest, accessToken } = props;
  return <Login loginRequest={loginRequest} accessToken={accessToken} />;
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (payload) => dispatch(authActions.loginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
