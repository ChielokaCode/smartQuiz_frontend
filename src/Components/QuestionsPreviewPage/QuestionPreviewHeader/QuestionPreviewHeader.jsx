import React from "react";
import "./QuestionPreviewHeader.css";

const QuestionPreviewHeader = () => {
  return (
    <div className="container-question-preview">
      <div className="grid-container-column-question-preview">
        <h2 className="quiz-name-text">Untitled Quiz</h2>
        <div className="grid-item-question-preview">
          <select className="select-button" id="time" name="time">
            <option value="30"> 30 minutes</option>
            <option value="20">20 minutes</option>
            <option value="10">10 minutes</option>
          </select>
          <input
            className="select-button"
            type="date"
            id="birthday"
            name="birthday"
          />
          <select className="select-button" id="points" name="points">
            <option value="30">30 points</option>
            <option value="20">20 points</option>
            <option value="10">10 points</option>
          </select>
          <a className="cancel"></a>
          <button className="publish-quiz">
            <img className="publish-img" src="src/assets/icons/Publish.svg" />
            Publish Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPreviewHeader;
