import React from "react";
import "./ReviewAnswers.css";

const ReviewAnswers = () => {
  return (
    <>
      <button className="back-black-icon">
        <img src="../src/assets/icons/arrow-left.svg" />
        Back
      </button>
      <div className="grid-container-question-preview-body">
        {/* ONE QUESTION TAB*/}
        <div className="grid-item-question-preview-body">
          <div className="question-edit-delete-tab">
            <img src="src/assets/icons/check_box.svg" />
            <h3>Question 1</h3>
            <a href="#">
              <img src="src/assets/icons/pen.svg" />
            </a>
            <a href="#">
              <img src="src/assets/icons/delete.svg" />
            </a>
          </div>
          <h3 className="question-content">
            Which regulatory body is responsible for overseeing and regulating
            banks in the United States?
          </h3>
          <div className="option-answer-tab">
            <div className="grid-items-answer">
              <img src="src/assets/icons/Ellipse 587.svg"></img>
              <h4>SEC (Securities and Exchange Commission)</h4>
            </div>
            <div className="grid-items-answer">
              <img src="src/assets/icons/Ellipse 587 (1).svg"></img>
              <h4>FOMC (Federal Open Market Committee)</h4>
            </div>
            <div className="grid-items-answer">
              <img src="src/assets/icons/Ellipse 587 (1).svg"></img>
              <h4>OCC (Office of the Comptroller of the Currency)</h4>
            </div>
            <div className="grid-items-answer">
              <img src="src/assets/icons/Ellipse 587 (1).svg"></img>
              <h4>FDIC (Federal Deposit Insurance Corporation)</h4>
            </div>
          </div>
        </div>
        {/* ONE QUESTION TAB*/}
        <div className="button-btn">
          <button className="create-new-question-button">
            <img src="../src/assets/icons/to-dashboard-icon.png" />
            <span>Go Back to Dashboard</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewAnswers;
