import React from "react";
import "./Offerings.css";

const Offerings = () => {
  return (
    <div className="container-offering">
      <h2 className="title">
        <img src="../src/assets/icons/Stars.svg" />
        Our Offerings
      </h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src="../src/assets/icons/Vector.svg" />
          <h3>Interactive Quizzes</h3>
          <p>
            Engage in interactive quizzes designed to enhance your learning
            experience.
          </p>
        </div>
        <div className="grid-item">
          <img src="../src/assets/icons/Gym.svg" />
          <h3>Robust Analytics</h3>
          <p>
            Gain insights into your performance with our comprehensive analytics
            tools.
          </p>
        </div>
        <div className="grid-item">
          <img src="../src/assets/icons/Teacher.svg" />
          <h3>Educator Support</h3>
          <p>
            Dedicated support for educators to create, manage, and analyze
            quizzes effortlessly.
          </p>
        </div>
        <div className="grid-item">
          <img src="../src/assets/icons/Secure.svg" />
          <h3>Secure Platform</h3>
          <p>
            Your privacy and data security are our top priorities. Experience a
            safe and secure learning environment.
          </p>
        </div>
        <div className="grid-item">
          <img src="../src/assets/icons/Settings.svg" />
          <h3>Customizable Learning Paths</h3>
          <p>
            Tailor your learning journey with customizable paths and resources
          </p>
        </div>
        <div className="grid-item">
          <img src="../src/assets/icons/Library (1).svg" />
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
