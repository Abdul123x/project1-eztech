import React from "react";
import "./Courses.css";
import { assets, carousel } from "../../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="courses">
      <h1>Recommended Course's</h1>
      <div className="service_carousel">
      <Slider {...settings}>
        {carousel.map((item, index) => {
          return (
            <div className="carousel_item" key={index}>
              <img className="main_img" src={item.image} alt="" />
             <div className="carousel_content">
             <p className="carousel_name">{item.name}</p>
              <h2 className="carousel_desc">{item.description}</h2>
              <hr />
             <div className="duration">
              <div className="time">
              <img className="clock_carousel" src={assets.clockcarousel} alt="" />
              <span>3 months</span>
              </div>
              <p>{item.price}</p>
             </div>
             </div>
            </div>
          );
        })}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
