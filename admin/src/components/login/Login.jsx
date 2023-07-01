import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = (props) => {
  const { LoginRequest, accessToken, loginError } = props;
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handleChangeValue = (e) => {
    setDataLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    LoginRequest(dataLogin);
    if (loginError) {
      toast.error(loginError, toastOptions);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h1 className="title">Chào Mừng Trở Lại</h1>
        <form className="login-form">
          <input
            onChange={handleChangeValue}
            name="email"
            type="text"
            placeholder="username"
          />
          <input
            onChange={handleChangeValue}
            name="password"
            type="password"
            placeholder="password"
          />
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
