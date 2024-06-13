import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <center className="footer__top">
        <p className="footer__heading">
          It’s time to <span>start</span> <br />
          investing in yourself
        </p>
        <img
          className="footer_image"
          src={assets.footerimg}
          alt="Footer graphic"
        />
      </center>

      <div className="footer__bottom">
        <div className="footer__section footer__section--left">
          <h3 className="heading_main">ABOUT</h3>
          <p className="footer__text">
            Ezitech Institute provides a platform for newcomers to launch their
            IT and freelancing careers. Our emphasis on practical information
            technology courses that are career and work oriented makes us the
            top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>
        <div className="footer__section footer__section--center">
          <h3 className="heading_main">PAGES</h3>
          <ul className="footer__text">
            <li>BLOG</li>
            <li>EZICODING</li>
            <li>INTERNSHIP</li>
            <li>OUR SERVICES</li>
          </ul>
        </div>
        <div className="footer__section footer__section--right">
          <h3 className="heading_main">CONTACT</h3>
          <div className="contact_footer">
            <div className="location_f image_align">
              <img src={assets.pinfooter} alt="" />
              <p>
                Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                Punjab 46000
              </p>
            </div>
            <div className="call_f image_align">
              <img src={assets.callfooter} alt="" />
              <p>+923455555396</p>
            </div>
            <div className="mail_f image_align">
              <img src={assets.emailfooter} alt="" />
              <p>info@ezitech.org</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copy-right">
        Copyright © 2024 Ezitech Institute | Design & Develop by Eziline
        Software House
      </div>
    </div>
  );
};

export default Footer;
