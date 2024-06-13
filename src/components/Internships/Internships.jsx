import React from "react";
import "./Internships.css";
import { assets, internships } from "../../assets/assets";
const Internships = () => {
  return (
    <div className="internships">
      <h1>Perfect Internship's For You</h1>

      <div className="internship_cards">
        <div className="intern_flex">
        {internships.map((item, index) => {
          return (
            <div className="internship_card" key={index}>
              <div className="internship_header">
                <p> {item.name}</p>
                <img src={item.image} alt="" />
              </div>
              <div className="card_content">
              <div className="internship_employ">
                <img src={assets.employmentman} alt="" />
                <span>Employment -</span>
                <span className="hybrid">Hybrid</span>
              </div>
              <div className="location">
                <img src={assets.navigation} alt="" />
                <span>Location -</span>
                <span className="hybrid">Rawalpindi</span>
              </div>
              <div className="jobtype">
                <img src={assets.employebag} alt="" />
                <span>Job Type -</span>
                <span className="hybrid">Part time</span>
                <span className="hybrid">Full time</span>

              </div>
              </div>
              <div className="internship_button">
                <button className="button_readmore">Read More</button>
              </div>
            </div>
          );
        })}
        </div>
        <div className="loadmore">
                <button className="loadbutton">Read More</button>
              </div>
      </div>
    </div>
  );
};

export default Internships;
