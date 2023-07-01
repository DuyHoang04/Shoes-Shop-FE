import React, { useEffect } from "react";
import UserList from "../components/userList/UserList";
import { connect } from "react-redux";
import * as actions from "../action/userAction.js";

export const UserListContainer = (props) => {
  const { getAllUser, userList, removeUser } = props;

  useEffect(() => {
    const fetchDataUser = async () => {
      await getAllUser();
    };
    fetchDataUser();
  }, [getAllUser]);

  return <UserList userList={userList} removeUserRequest={removeUser} />;
};

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUser: () => dispatch(actions.getUserRequest()),
    removeUser: (payload) => dispatch(actions.removeUserRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
