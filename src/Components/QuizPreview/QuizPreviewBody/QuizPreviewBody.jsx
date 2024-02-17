import React, { useState, useEffect } from "react";
import "./QuizPreviewBody.css";
import { useNavigate } from "react-router-dom";

const QuizPreviewBody = () => {
  const [questionDataList, setQuestionData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestionData = JSON.parse(
      sessionStorage.getItem("questionDataList")
    );
    if (storedQuestionData) {
      setQuestionData(storedQuestionData);
    } else {
      console.error("Stored question data not found");
    }
  }, []);

  function handleNewQuiz() {
    navigate("/create-question");
  }

  function handleDeleteQuestion(index) {
    // Create a copy of the questionDataList
    const updatedQuestionDataList = [...questionDataList];
    // Remove the question at the specified index
    updatedQuestionDataList.splice(index, 1);
    // Update session storage with the modified questionDataList
    sessionStorage.setItem(
      "questionDataList",
      JSON.stringify(updatedQuestionDataList)
    );
    // Update state with the modified questionDataList
    setQuestionData(updatedQuestionDataList);
  }

  return (
    <div className="grid-container-question-preview-body">
      {questionDataList ? (
        questionDataList.map((question, index) => (
          <div className="grid-item-question-preview-body" key={index}>
            <div className="question-edit-delete-tab">
              <img src="src/assets/icons/check_box.svg" alt="checkbox" />
              <h3>Question {index + 1}</h3>
              <a href="#" onClick={() => handleDeleteQuestion(index)}>
                <img src="src/assets/icons/delete.svg" alt="delete" />
              </a>
              <a href="#">
                <img src="src/assets/icons/pen.svg" alt="edit" />
              </a>
            </div>
            <h3 className="question-content">{question.questionContent}</h3>
            <div className="option-answer-tab-table">
              {Object.entries(question).map(([key, value], optionIndex) => {
                if (key.startsWith("option")) {
                  return (
                    <div className="grid-items-answer-table" key={optionIndex}>
                      <img src="src/assets/icons/Ellipse 587 (1).svg" alt="" />
                      <h4>{value}</h4>
                    </div>
                  );
                }

                return null;
              })}
              <div className="grid-items-answer">
                <img src="src/assets/icons/Ellipse 587.svg" alt="answer" />
                <h4>{question.answer}</h4>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
      <div className="button-btn">
        <button className="create-new-question-button" onClick={handleNewQuiz}>
          <img src="src/assets/icons/plus.svg" alt="plus" />
          <span>Create new Question</span>
        </button>
      </div>
    </div>
  );
};

export default QuizPreviewBody;
