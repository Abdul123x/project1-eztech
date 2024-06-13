import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import Hero from "../Hero/Hero";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="navbar">
      <div className="navbar_content">
        <img src={assets.ezitechlogo} alt="" />
        <div className="nav_item">
          <ul>
            <li
              onClick={() => setActive("Home")}
              className={active === "Home" ? "active" : null}
            >
              HOME
            </li>
            <li
              onClick={() => setActive("ABOUT US")}
              className={active === "ABOUT US" ? "active" : null}
            >
              ABOUT US
            </li>
            <li
              onClick={() => setActive("CERTIFICATIONS")}
              className={active === "CERTIFICATIONS" ? "active" : null}
            >
              CERTIFICATIONS
            </li>
            <li
              onClick={() => setActive("INTERNSHIPS")}
              className={active === "INTERNSHIPS" ? "active" : null}
            >
              INTERNSHIPS
            </li>
            <li
              onClick={() => setActive("SEMINARS")}
              className={active === "SEMINARS" ? "active" : null}
            >
              SEMINARS
            </li>
            <li
              onClick={() => setActive("INTERNSHIP REGISTERATION")}
              className={
                active === "INTERNSHIP REGISTERATION" ? "active" : null
              }
            >
              INTERNSHIP REGISTERATION
            </li>
          </ul>
        </div>
        <div className="nav_search">
          <p>|</p>
          <img className="heart_image" src={assets.heart} alt="" />
          <img src={assets.search} alt="" />
        </div>
        
      </div>
      <hr />
      <Hero/>
    </div>
  );
};

export default Navbar;
