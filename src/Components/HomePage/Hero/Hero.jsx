import React from "react";
import "./Hero.css";
import starsSvgImg from "/src/assets/icons/Stars.svg";
import headLineImg from "/src/assets/icons/headline-img.svg";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="first-div">
        <div className="main-title">
          <h2 className="title-bold">
            Your Gateway to Excellence in Education!
          </h2>
          <p className="paragraph-hero">Sign Up Now for a transformative Learning Experience</p>
        </div>
        <button className="button-hero">
          <img src={starsSvgImg}  alt="starsImg"/>
          <span>Start Learning</span>
        </button>
      </div>
      <div className="img-tab">
        <img className="blueImg" src={headLineImg}  alt="headLineImg"/>
      </div>
    </div>
  );
};

export default Hero;
