import React from "react";
import "./Footer.css";
import facebookImg from "/src/assets/icons/facebook logo.svg";
import twitterImg from "/src/assets/icons/Twitter logo.svg";
import linkedInImg from "/src/assets/icons/linkedin logo.svg";
import instagramImg from "/src/assets/icons/instagram logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-container">
          <span className="footer-text">Smart Quiz </span>
          <span>
            <img id="img1" src={facebookImg}  alt="facebookImg"/>
            <img id="img2" src={twitterImg}  alt="twitterImg"/>
            <img id="img3" src={linkedInImg}  alt="linkedInImg"/>
            <img id="img4" src={instagramImg}  alt="instagramImg"/>
          </span>
          <p className="tiny-text">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
        </div>
        <p className="copyright">© 2024 Smart Quiz | Powered by SmartQuiz</p>
      </div>
    </div>
  );
};

export default Footer;
