import { Login } from "../components/Auth/Login";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../action/authAction";

const LoginContainer = (props) => {
  const { userToken, userId } = props;
  const { loginRequest } = props;
  console.log(props);
  return (
    <Login loginRequest={loginRequest} userToken={userToken} userId={userId} />
  );
};

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.userToken,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (payload) => dispatch(actions.loginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
