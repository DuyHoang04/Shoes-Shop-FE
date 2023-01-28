import React from "react";
import "../styles/index.scss";
import Logo from "../img/logo.png";
import { Search, ShoppingCart } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { itemServices } from "../myData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import * as actions from "../action/cartAction";

import { connect } from "react-redux";

const Header = (props) => {
  const { pathname } = useLocation();
  const { cartItem, showCartRequest, userId, userToken } = props;

  const settingsSlick = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
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

  return (
    <div className="header">
      <div className="headerTopBar">
        <p className="headerTopBar_right">
          460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 -
          804-399-3580
        </p>
        <div className="headerTopBar_btn">
          {userId && userToken ? (
            <Link to="/login">Đăng xuất</Link>
          ) : (
            <Link to="/login">Đăng nhập & Đăng kí</Link>
          )}
        </div>
      </div>
      <div className="headerNav">
        <img src={Logo} alt="" className="headerNav_right" />
        <ul className="headerNav_link">
          {links.map(({ name, link }, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="headerNav_left">
          <div className="headerNav_left-search">
            <input type="text" placeholder="Tìm Kiếm..." />
            <Search />
          </div>
          <div className="headerNav_left-cart">
            <div className="icon">
              <ShoppingCart onClick={(e) => showCartRequest()} />
            </div>
            <span>{cartLength}</span>
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
