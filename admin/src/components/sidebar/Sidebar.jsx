import "./sidebar.css";
import { LineStyle, PermIdentity, Storefront } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [activeTitle, setActiveTitle] = useState("Dashboard");

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${activeTitle === "" && "active"}`}
                onClick={() => handleTitleClick("")}
              >
                <LineStyle className="sidebarIcon" />
                Trang Chủ
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/user" className="link">
              <li
                className={`sidebarListItem ${
                  activeTitle === "user" && "active"
                }`}
                onClick={() => handleTitleClick("user")}
              >
                <PermIdentity className="sidebarIcon" />
                Người Dùng
              </li>
            </Link>
            <Link to="/addUser" className="link">
              <li
                className={`sidebarListItem ${
                  activeTitle === "addUser" && "active"
                }`}
                onClick={() => handleTitleClick("addUser")}
              >
                <PermIdentity className="sidebarIcon" />
                Thêm Người Dùng
              </li>
            </Link>
            <Link to="/product" className="link">
              <li
                className={`sidebarListItem ${
                  activeTitle === "product" && "active"
                }`}
                onClick={() => handleTitleClick("product")}
              >
                <Storefront className="sidebarIcon" />
                Sản Phẩm
              </li>
            </Link>
            <Link to="/addProduct" className="link">
              <li
                className={`sidebarListItem ${
                  activeTitle === "addProduct" && "active"
                }`}
                onClick={() => handleTitleClick("addProduct")}
              >
                <Storefront className="sidebarIcon" />
                Thêm Sản Phẩm
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
