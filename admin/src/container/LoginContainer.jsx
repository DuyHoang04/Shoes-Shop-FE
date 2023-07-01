import { connect } from "react-redux";
import { Login } from "../components/login/Login";
import * as actions from "../action/authAction.js";

const LoginContainer = (props) => {
  const { LoginRequest, accessToken, loginError } = props;

  return (
    <div>
      <Login
        LoginRequest={LoginRequest}
        accessToken={accessToken}
        loginError={loginError}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken,
    loginError: state.auth.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginRequest: (payload) => dispatch(actions.LoginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
