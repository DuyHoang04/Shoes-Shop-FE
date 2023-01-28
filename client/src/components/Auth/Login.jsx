import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = (props) => {
  const { userToken, userId } = props;
  const { loginRequest } = props;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (userToken && userId) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const ValidateForm = () => {
    const { password, email } = credentials;
    if (!password & !email) {
      toast.error("Không được bỏ trống ô nào cả nha!", toastOptions);
    } else if (!email) {
      toast.error("Phải có UserName vs Password", toastOptions);
      return false;
    } else if (!password) {
      toast.error("Phải có UserName vs Password", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ValidateForm()) {
      try {
        loginRequest(credentials);
        if (!userId && !userToken) {
          console.log("VO DAY NE");
          navigate("/home");
        }
      } catch (err) {
        alert("LOI");
      }
    }
  };

  return (
    <>
      <div className="login">
        <form className="loginForm">
          <div className="loginTitle">
            <h1>LOGIN</h1>
          </div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button className="loginButton" type="submit" onClick={handleSubmit}>
            Login
          </button>
          <p className="linkRegister">
            <Link to="/register">Create Account</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
