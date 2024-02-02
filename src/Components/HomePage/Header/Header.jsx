import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container">
      <span className="smart-quiz">Smart Quiz</span>
      <button className="nav">
        <div className="frame-1">
          <a href="#home" className="home">
            Home
          </a>
          <a href="#about" className="about-us">
            About us
          </a>
          <a href="#services" className="services">
            Services
          </a>
          <a href="#contact" className="contact-us">
            Contact Us
          </a>
        </div>
      </button>
      <div className="stars" />
      <Link to="/signup">
        <button className="frame-2">
          <div className="login" />
          <span className="get-started">Get started</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
