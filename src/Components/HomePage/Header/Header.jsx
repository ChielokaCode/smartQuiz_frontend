import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container-header">
      <span className="smart-quiz-header">Smart Quiz</span>
      <button className="nav-header">
        <div className="frame-1-header">
          <a href="#home" className="home-header">
            Home
          </a>
          <Link to="/about-us" className="about-us-header">
            About us
          </Link>
          <a href="#services" className="services-header">
            Services
          </a>
          <a href="#contact" className="contact-us-header">
            Contact Us
          </a>
        </div>
      </button>
      <div className="stars-header-header" />
      <Link to="/signup">
        <button className="frame-2-header">
          <div className="login-header" />
          <span className="get-started-header">Get started</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
