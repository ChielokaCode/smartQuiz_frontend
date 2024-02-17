import React from "react";
import "./ReviewAnswersHeader.css";

const ReviewAnswersHeader = () => {
  return (
    <div className="container-question-preview">
      <div className="grid-container-column-question-preview">
        <h2 className="quiz-name-text">Untitled Quiz</h2>
        <div className="grid-item-question-preview">
          <input
            className="select-button"
            type="text"
            value="30 minutes"
            disabled
          />
          <div className="grid-item-question-preview">
            <input
              className="select-button"
              type="text"
              value="20 points"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAnswersHeader;
