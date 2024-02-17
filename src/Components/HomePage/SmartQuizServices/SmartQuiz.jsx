import React from "react";
import "./SmartQuiz.css";

const SmartQuiz = () => {
  return (
    <div className="container-smartquiz">
      <div className="main-body">
        <h2 className="whyChoose">
          Why Choose <span>Smart Quiz?</span>
        </h2>
      </div>
      <div className="well">
        <div className="innerWell">
          <div className="firstInner">
            <img src="../src/assets/icons/Solutions.svg" />
            <h3>Innovative Learning Solutions</h3>

            <p>
              We provide cutting-edge educational tools and approaches to
              inspire and engage learners in a dynamic and forward-thinking
              learning environment.
            </p>
          </div>
          <div className="secondInner">
            <img src="../src/assets/icons/Elearning.svg" />
            <h3>Dedicated Educator Support</h3>
            <p>
              Our platform offers unwavering assistance to educators, ensuring
              they have the resources and guidance needed to create, manage, and
              optimize the learning experience for their students.
            </p>
          </div>
          <div className="thirdInner">
            <img src="../src/assets/icons/User.svg" />
            <h3>User-Friendly Platform</h3>
            <p>
              Navigate seamlessly through our intuitive and user-friendly
              platform designed to enhance the overall learning experience,
              making education accessible and enjoyable for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartQuiz;
