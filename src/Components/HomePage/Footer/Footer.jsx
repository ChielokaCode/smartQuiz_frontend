import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-container">
          <span className="footer-text">Smart Quiz </span>
          <span>
            <img id="img1" src="../src/assets/icons/facebook logo.svg" />
            <img id="img2" src="../src/assets/icons/Twitter logo.svg" />
            <img id="img3" src="../src/assets/icons/linkedin logo.svg" />
            <img id="img4" src="../src/assets/icons/instagram logo.svg" />
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
