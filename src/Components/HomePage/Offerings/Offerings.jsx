import React from "react";
import "./Offerings.css";
import starsImg from "/src/assets/icons/Stars.svg";
import vectorImg from "/src/assets/icons/Vector.svg";
import gymImg from "/src/assets/icons/Gym.svg";
import teacherImg from "/src/assets/icons/Teacher.svg";
import secureImg from "/src/assets/icons/Secure.svg";
import settingImg from "/src/assets/icons/Settings.svg";
import libraryImg from "/src/assets/icons/Library (1).svg";

const Offerings = () => {
  return (
    <div className="container-offering">
      <h2 className="title">
        <img src={starsImg}  alt="starsImg"/>
        Our Offerings
      </h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={vectorImg}  alt="vectorImg"/>
          <h3>Interactive Quizzes</h3>
          <p>
            Engage in interactive quizzes designed to enhance your learning
            experience.
          </p>
        </div>
        <div className="grid-item">
          <img src={gymImg}  alt="gymImg"/>
          <h3>Robust Analytics</h3>
          <p>
            Gain insights into your performance with our comprehensive analytics
            tools.
          </p>
        </div>
        <div className="grid-item">
          <img src={teacherImg}  alt="teacherImg"/>
          <h3>Educator Support</h3>
          <p>
            Dedicated support for educators to create, manage, and analyze
            quizzes effortlessly.
          </p>
        </div>
        <div className="grid-item">
          <img src={secureImg}  alt="secureImg"/>
          <h3>Secure Platform</h3>
          <p>
            Your privacy and data security are our top priorities. Experience a
            safe and secure learning environment.
          </p>
        </div>
        <div className="grid-item">
          <img src={settingImg}  alt="settingsImg"/>
          <h3>Customizable Learning Paths</h3>
          <p>
            Tailor your learning journey with customizable paths and resources
          </p>
        </div>
        <div className="grid-item">
          <img src={libraryImg}  alt="libraryImg"/>
          <h3>Resource Library</h3>
          <p>
            Access our extensive resource library featuring a wealth of study
            materials, reference guides, and educational content. Stay informed
            and inspired on your educational path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
