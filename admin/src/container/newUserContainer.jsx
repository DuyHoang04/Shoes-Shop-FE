import React from "react";
import NewUser from "../components/newUser/NewUser";
import * as actions from "../action/userAction";

import { connect } from "react-redux";

export const newUserContainer = (props) => {
  const { addUserRequest, errorMessage, successMessage } = props;
  return (
    <NewUser
      addUserRequest={addUserRequest}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.users.error,
    successMessage: state.users.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserRequest: (payload) => dispatch(actions.addUserRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(newUserContainer);
