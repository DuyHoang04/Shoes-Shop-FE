import React from "react";
import Background from "../img/map.jpg";
import { contactData } from "../myData";

export const Contact = () => {
  const myBackGround = {
    backgroundImage: `url(${Background})`,
    height: "80vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="contact">
      <div className="contact_Bg" style={myBackGround}></div>
      <div className="contact_content">
        <div className="contact_content-left">
          <div className="contact_content-leftTitle">
            <h1> -GET IN TOUCH</h1>
          </div>
          <div className="contact_content-leftForm">
            <div className="nameInput">
              <h1>Name *</h1>
              <input type="text" />
            </div>
            <div className="emailInput">
              <h1>Email *</h1>
              <input type="text" />
            </div>
            <div className="messInput">
              <h1>MESSAGE *</h1>
              <textarea name="" id="" rows="10"></textarea>
            </div>
            <button className="contact_content-leftForm-btn">Gửi Mess</button>
          </div>
        </div>
        <div className="contact_content-right"></div>
      </div>
    </div>
  );
};
