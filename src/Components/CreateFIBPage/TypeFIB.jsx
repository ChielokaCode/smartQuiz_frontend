// import React from 'react'
import "./TypeFIB.css";

const TypeFIB = ({ questionData, setQuestionData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="FIBForm">
      <form className="FIBGridContainer">
        <input
          type="number"
          id="point"
          className="FIBquestionpoint"
          placeholder="Point for this question"
          value={questionData.getPoint}
          name="point"
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          id="question"
          className="FIBQuestion"
          placeholder="Type your question here"
          value={questionData.getQuestion}
          name="questionContent"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          id="answer"
          className="FIBAnswer"
          placeholder="Type your answer here"
          value={questionData.getAnswer}
          name="answer"
          onChange={handleInputChange}
        ></input>
        <p>Add Explanation</p>
        <input
          type="text"
          id="explanation"
          className="FIBexplanation"
          placeholder="Type your explanation here"
          value={questionData.getExplanation}
          name="explanation"
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
};

export default TypeFIB;
