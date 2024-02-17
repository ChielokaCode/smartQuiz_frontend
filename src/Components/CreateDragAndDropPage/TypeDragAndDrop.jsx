import React from "react";
import "./TypeDragAndDrop.css";

const TypeDragAndDrop = ({ questionData, setQuestionData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="DragForm">
      <form className="DragGridContainer">
        <input
          type="number"
          id="point"
          className="Dragquestionpoint"
          placeholder="Point for this question"
          value={questionData.getPoint}
          name="point"
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          id="question"
          className="DragQuestion"
          placeholder="Type your question here"
          value={questionData.getQuestion}
          name="questionContent"
          onChange={handleInputChange}
        ></input>
        <div className="DragOptions">
          <input
              type="text"
              id="option1"
              className="DragOption"
              placeholder="Type your incorect option"
              value={questionData.getOption1}
              name="option1"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="option2"
              className="DragOption"
              placeholder="Type your incorrect option"
              value={questionData.getOption2}
              name="option2"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="option3"
              className="DragOption"
              placeholder="Type your incorrect option"
              value={questionData.getOption3}
              name="option3"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="option4"
              className="DragOption"
              placeholder="Type your incorrect option here"
              value={questionData.getOption4}
              name="option4"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="option5"
              className="DragOption"
              placeholder="Type your incorrect option here"
              value={questionData.getOption5}
              name="option5"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="option6"
              className="DragOption"
              placeholder="Type your incorrect option here"
              value={questionData.getOption6}
              name="option6"
              onChange={handleInputChange}
          ></input>
          <input
              type="text"
              id="answer"
              className="DragOption"
              placeholder="Type your answer here"
              value={questionData.getAnswer}
              name="answer"
              onChange={handleInputChange}
          ></input>
        </div>

        <p>Add Explanation</p>
        <input
            type="text"
            id="explanation"
            className="Dragexplanation"
            placeholder="Type your explanation here"
            value={questionData.getExplanation}
            name="explanation"
            onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
};

export default TypeDragAndDrop;
