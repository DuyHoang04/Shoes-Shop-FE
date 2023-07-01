import "./newUser.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewUser(props) {
  const { addUserRequest, errorMessage, successMessage } = props;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    status: "",
    role: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChangeValue = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (validateData()) {
      addUserRequest(userData);
    }
  };

  const validateData = () => {
    const { username, email, password, status, role } = userData;

    if (!username || !email || !password || !status || !role) {
      toast.error("Không được bỏ trống Ô nào", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            onChange={handleChangeValue}
            name="username"
            type="text"
            placeholder="john"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            onChange={handleChangeValue}
            name="email"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            onChange={handleChangeValue}
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label>Status</label>
          <select
            onChange={handleChangeValue}
            name="status"
            className="newUserSelect"
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select
            onChange={handleChangeValue}
            name="role"
            className="newUserSelect"
          >
            <option value="">Select</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>
        </div>
        <button onClick={handleAddUser} className="newUserButton">
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
