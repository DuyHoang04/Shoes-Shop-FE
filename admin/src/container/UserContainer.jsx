import React, { useEffect } from "react";
import User from "../components/user/User";
import { connect } from "react-redux";
import * as actions from "../action/userAction.js";
import { useLocation } from "react-router-dom";

export const UserContainer = (props) => {
  const userId = useLocation().pathname.slice(6, 10000);
  const { getUser, userData, changePassword, updateUser } = props;

  useEffect(() => {
    getUser(userId);
  }, []);

  return (
    <User
      userId={userId}
      userData={userData}
      changePassword={changePassword}
      updateUser={updateUser}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users.userDetail,
    userMessage: state.users.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(actions.getUserDetailUserRequest(payload)),
    changePassword: (payload) =>
      dispatch(actions.changePasswordUserRequest(payload)),
    updateUser: (payload) => dispatch(actions.updateUserRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
