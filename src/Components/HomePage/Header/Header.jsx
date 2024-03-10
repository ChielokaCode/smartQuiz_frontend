import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container-header">
      <Link className="link-text" to="/"><span className="smart-quiz-header">Smart Quiz</span></Link>
      <button className="nav-header">
        <div className="frame-1-header">
          <Link to="/home" className="home-header">
            Home
          </Link>
          <Link to="/about-us" className="about-us-header">
            About us
          </Link>
          <Link to="/services" className="services-header">
            Services
          </Link>
          <Link to="/contact-us" className="contact-us-header">
            Contact Us
          </Link>
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
