import React from "react";
import "./Performance.css";
import {useParams} from "react-router-dom";
import arrowLeftWhiteImg1 from "/src/assets/icons/arrow-left (1).svg";
import rewardsImg from "/src/assets/icons/rewards.svg";
import reviewImg from "/src/assets/icons/Review.svg";

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
                src={arrowLeftWhiteImg1}
             alt="arrowLeftImg"/>
          </button>

          <div className="square-box-grid-container">
            <img
                className="performance-img"
                src={rewardsImg}
             alt="rewardsImg"/>
            <h4 className="score">{scores}%</h4>
            <h4 className="score">
              {message}
            </h4>
            <button className="review-button">
              <img
                  className="review-img"
                  src={reviewImg}
               alt="reviewImg"/>
              Review Answers
            </button>
          </div>
        </div>
      </div>
  );
};

export default Performance;
