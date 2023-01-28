import React from "react";
import UserList from "../components/userList/UserList";
import { connect } from "react-redux";

export const UserListContainer = (props) => {
  return <UserList />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
