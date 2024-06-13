import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        {/* header contact */}
        <div className="header_contact">
          <div className="header_call header_spanalign">
            <img className="header_icon" src={assets.call} alt="" />
            <span className="header_span"> +92 3455555396</span>
          </div>
          <div className="header_location header_spanalign">
            <img className="header_icon" src={assets.pin} alt="" />
            <span className="header_span">
              Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
            </span>
          </div>
          <div className="header_timing header_spanalign">
            <img className="header_icon" src={assets.clock} alt="" />
            <span className="header_span"> Mon - Fri 8.00 - 20.00</span>
          </div>
        </div>
        <div className="header_socialicon">
          <img src={assets.facebook} alt="" />
          <img src={assets.instagram} alt="" />
          <img src={assets.behance} alt="" />
          <img src={assets.linkedin} alt="" />
          <img src={assets.youtube} alt="" />
        </div>
        <div className="header_login">
            <img className="user_icon" src={assets.user} alt="" />
            <span>Login</span>
            <span>|</span>
            <span>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
