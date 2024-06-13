import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Programming", "Web Design", "Social skills", "Marketing"],
    loop: {},
  });
  return (
    <div className="hero">
      <h1>
        Learn the fundamentals with our Experts in{" "}
        <span className="text_span">{text}</span>
        {/* <span className="cursor">
          <Cursor />
        </span> */}
      </h1>
      <h3>Utilize Effective Learning to Reach Your Potential!</h3>
      <input type="text" placeholder="search courses..." />
      <h3>
        Explore our most useful products{" "}
        <span>
          <img className="heart_imghero" src={assets.heart} alt="" />
        </span>
      </h3>
      <div className="hero_ezimages">
      <img src={assets.eziblogs} alt="" />
       <img src={assets.whiteezipos} alt="" />
       <img src={assets.whitelgooo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
