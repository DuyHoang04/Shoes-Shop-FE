import React from "react";
import NewUser from "../components/newUser/NewUser";

import { connect } from "react-redux";

export const newUserContainer = (props) => {
  return <NewUser />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(newUserContainer);
