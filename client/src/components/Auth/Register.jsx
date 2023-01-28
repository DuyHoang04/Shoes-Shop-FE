import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = (props) => {
  const { registerRequest, notice } = props;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = credentials;
    if (!password || !confirmPassword || !username || !email) {
      toast.error("Không được bỏ trống ô nào cả nha!", toastOptions);
    } else if (password !== confirmPassword) {
      toast.error(
        "Mật khẩu với xác nhận mật khẩu không giống nhau",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error("UserName không được it hơn 3 kí tự", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password phải có hơn 8 kí tự", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  if (notice) {
    toast.error(notice, toastOptions);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const data = registerRequest(credentials);
      } catch (err) {
        alert("LOI");
      }
    }
  };

  return (
    <>
      <div className="register">
        <form className="registerForm">
          <div className="registerTitle">
            <h1>Đăng kí</h1>
          </div>
          <input
            type="text"
            placeholder="UserName"
            name="username"
            id="username"
            onChange={handleChange}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            id="confirmPassword"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
