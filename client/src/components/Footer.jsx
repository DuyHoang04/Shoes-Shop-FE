import React from "react";
import "../styles/index.scss";
import { Email } from "@mui/icons-material";
import Logo from "../img/logo-white.png";
import FooterBg from "../img/footer.jpg";

export const Footer = () => {
  const myBackGround = {
    backgroundImage: `url(${FooterBg})`,
    height: "65vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="footer">
      <div className="footerSub">
        <h3 className="footerSub_title">
          <Email />
          SIGN UP TO NEWSLETTER
        </h3>
        <div className="footerSub_email">
          <input type="text" />
          <div className="footerSub_email-btn">SUBSCRIBE</div>
        </div>
        <p className="footerSub_decs">
          ...and receive <span>$20</span> coupon for first shopping.
        </p>
      </div>
      <footer className="footerContainer" style={myBackGround}>
        <div className="footerContainer_content">
          <div className="footerContainer_left">
            <div className="footerLogo">
              <img src={Logo} alt="" />
            </div>
            <h1>gjfgj</h1>
          </div>
          <div className="footerContainer_right"></div>
        </div>
      </footer>
    </div>
  );
};
