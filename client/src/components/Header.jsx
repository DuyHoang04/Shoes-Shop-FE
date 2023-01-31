import React, { useState, useRef } from "react";
import "../styles/index.scss";
import Logo from "../img/logo.png";
import {
  Search,
  ShoppingCart,
  FormatListBulleted,
  Close,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { itemServices } from "../myData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import * as actions from "../action/cartAction";
import { connect } from "react-redux";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cartItem, showCartRequest, userId, userToken } = props;
  const [textName, setTextName] = useState();
  const settingsSlick = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const navRef = useRef();

  const showHeader = () => {
    navRef.current.classList.toggle("responsive");
    setShowNav(!showNav);
  };

  const cartLength = cartItem.reduce(function (acc, item) {
    return acc + item.quantity;
  }, 0);

  const links = [
    { name: "Home", link: "/home" },
    { name: "Men", link: "/Men" },
    { name: "Women", link: "/Women" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const active = links.findIndex((e) => e.link === pathname);

  const handleSearch = (e) => {
    if (e.key === "Enter" && textName) {
      navigate(`/search/${textName}`, { state: { textName } });
      setTextName("");
    }
  };

  return (
    <div ref={navRef} className="header">
      <div className="headerTopBar">
        <p className="headerTopBar_right">
          460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 -
          804-399-3580
        </p>
        <div className="headerTopBar_btn">
          {userId && userToken ? (
            <Link to="/" onClick={showHeader}>
              Đăng xuất
            </Link>
          ) : (
            <Link to="/login">Đăng nhập & Đăng kí</Link>
          )}
        </div>
        <div className="headerTopBar_close" onClick={showHeader}>
          <div className="close">
            <Close />
          </div>
        </div>
      </div>
      <div className="headerNav">
        <Link to="/home">
          <img src={Logo} alt="" className="headerNav_right" />
        </Link>
        <ul className="headerNav_link">
          {links.map(({ name, link }, index) => (
            <Link to={link}>
              <li
                key={index}
                className={`${index === active ? "active" : ""}`}
                onClick={showHeader}
              >
                {name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="headerNav_left">
          <div className="headerNav_left-search" onSubmit={handleSearch}>
            <input
              type="text"
              value={textName}
              placeholder="Tìm Kiếm..."
              onChange={(e) => setTextName(e.target.value)}
              onKeyPress={(e) => handleSearch(e)}
            />
            <Search />
          </div>
          <div
            className="headerNav_left-cart"
            onClick={(e) => showCartRequest()}
          >
            <div className="icon">
              <ShoppingCart />
            </div>
            <span>{cartLength}</span>
          </div>

          <div className="headerNav_left-list">
            <div
              className={`${!showNav ? "icon" : "close"}`}
              onClick={showHeader}
            >
              {!showNav ? <FormatListBulleted /> : <Close />}
            </div>
          </div>
        </div>
      </div>
      <div className="headerServices">
        <Slider {...settingsSlick}>
          {itemServices.map((item, index) => (
            <div key={index} className="headerServices_item">
              <img src={item.icon} alt="" />
              <div className="headerServices-title">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.cartItem,
    userId: state.auth.userId,
    userToken: state.auth.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCartRequest: () => dispatch(actions.showCartRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
