import React from "react";
import "./Services.css";
import { services } from "../../assets/assets";
const Services = () => {
  return (
    <div className="services">
      {services.map((item, index) => {
        return (
          <div key={index} className="service_content">
            <img src={item.service_image} alt="" />
            <p>{item.service_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
