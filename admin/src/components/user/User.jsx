import {
  LocationSearching,
  MailOutline,
  PermIdentity,
} from "@mui/icons-material";
import { Modal, Backdrop, Fade, TextField, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import avatar from "../../public/image/avatar.png";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "../../util";

export default function User(props) {
  const [openModal, setOpenModal] = useState(false);

  const { userData, getUser, userId, updateUser, changePassword } = props;
  const [dataPass, setDataPass] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [dataUpdate, setDataUpdate] = useState({
    username: "",
    email: "",
    status: "",
    role: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const handleChangeValuePassword = (e) => {
    setDataPass((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeValueUpdate = (e) => {
    setDataUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (validateData()) {
      updateUser({ dataUpdate, userId });
      setDataUpdate({
        username: "",
        email: "",
        status: "",
        role: "",
      });
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    changePassword({ dataPass, userId });
  };

  const validateData = () => {
    console.log(dataUpdate);
    const { username, email, status, role } = dataUpdate;

    if (!username || !email || !status || !role) {
      toast.error("Không được bỏ trống Ô nào", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/addUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={avatar} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData?.username}</span>
              <span className="userShowUserTitle">{userData?.role}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.status}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Vietnamese</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  value={dataUpdate.username}
                  type="text"
                  placeholder={userData?.username}
                  className="userUpdateInput"
                  name="username"
                  onChange={handleChangeValueUpdate}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  value={dataUpdate.email}
                  type="text"
                  placeholder={userData?.email}
                  className="userUpdateInput"
                  name="email"
                  onChange={handleChangeValueUpdate}
                />
              </div>
              <div className="userUpdateItem">
                <label>Gender</label>
                <div className="userUpdateItem">
                  <label>Role</label>
                  <select
                    value={dataUpdate.role}
                    onChange={handleChangeValueUpdate}
                    name="role"
                    className="userUpdateSelect"
                  >
                    <option value="">Select</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateItem">
                <label>Status</label>
                <select
                  value={dataUpdate.status}
                  onChange={handleChangeValueUpdate}
                  name="status"
                  className="userUpdateSelect"
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <button onClick={handleOpenModal} className="userUpdateButton">
                Change Password
              </button>
              <button onClick={handleUpdateUser} className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={(e) => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <div className="inputContainer">
              <TextField
                name="oldPassword"
                label="Old Password"
                variant="outlined"
                type="password"
                onChange={handleChangeValuePassword}
              />
              <TextField
                name="newPassword"
                label="New Password"
                variant="outlined"
                type="password"
                onChange={handleChangeValuePassword}
              />
            </div>
            <Button
              onClick={handleChangePassword}
              sx={{ width: "200px" }}
              variant="contained"
            >
              Change Password
            </Button>
          </Box>
        </Fade>
      </Modal>
      <ToastContainer />
    </div>
  );
}
