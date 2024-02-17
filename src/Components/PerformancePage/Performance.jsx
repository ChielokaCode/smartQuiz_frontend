import React from "react";
import "./Performance.css";
import {useParams} from "react-router-dom";

const Performance = () => {
  const {scores} = useParams();
  let message;

  if (scores >= 90) {
    message = "Congratulations! You scored an A!";
  } else if (scores >= 80) {
    message = "Well done! You scored a B!";
  } else if (scores >= 70) {
    message = "Good job! You scored a C!";
  } else if (scores >= 60) {
    message = "Nice effort! You scored a D!";
  } else {
    message = "Keep practicing! You scored an F!";
  }

  return (
      <div className="main-container-performance">
        <div className="container-performance">
          <button className="button-back">
            <img
                className="back-img"
                src="../src/assets/icons/arrow-left (1).svg"
            />
          </button>

          <div className="square-box-grid-container">
            <img
                className="performance-img"
                src="../src/assets/icons/rewards.svg"
            />
            <h4 className="score">{scores}%</h4>
            <h4 className="score">
              {message}
            </h4>
            <button className="review-button">
              <img
                  className="review-img"
                  src="../src/assets/icons/Review.svg"
              />
              Review Answers
            </button>
          </div>
        </div>
      </div>
  );
};

export default Performance;
