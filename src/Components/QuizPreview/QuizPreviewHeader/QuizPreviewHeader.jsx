import React, { useEffect, useState } from "react";
import "./QuizPreviewHeader.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Popover } from "react-bootstrap";

const QuizPreviewHeader = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuizData = JSON.parse(sessionStorage.getItem("quizData"));
    const storedQuestionData = JSON.parse(
      sessionStorage.getItem("questionDataList")
    );
    if (storedQuestionData && storedQuizData) {
      const totalPoints = storedQuestionData.reduce(
        (acc, question) => acc + parseInt(question.point),
        0
      );
      setQuizData({
        ...storedQuizData,
        point: totalPoints,
      });
    } else {
      console.error("Stored quiz data or question data not found");
    }

    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSave = () => {
      const questionDataList = JSON.parse(sessionStorage.getItem("questionDataList")
      );

      const questions = questionDataList.map((question)=>({
          answer:question.answer,
          explanation: question.explanation,
          questionContent: question.questionContent,
          options:[question.option1,question.option2, question.option3, question.option4],
          questionType: question.questionType,
      }))
      const saveData = {
          title: quizData.quizName,
          topic: quizData.topic,
          imageUrl: quizData.selectedImage.image,
          subjectType: quizData.subject,
          timeLimit: quizData.timeLimit,
          totalMarks: quizData.point,
          description: quizData.description,
          questions: questions,
      };
      console.log(saveData);
      const token = localStorage.getItem("jwtToken");

      try {
          const response = axios.post(
              "http://localhost:8080/api/v1/quiz/create-quiz",
              saveData,
              {
                  params: {
                      isPublish: false,
                  },
                  withCredentials: true,
                  headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                  },
              }
          );

          console.log("Quiz save successfully:", saveData);
          alert("Quiz saved successfully:", response.data);
          navigate("/dashboard");

          sessionStorage.clear();
      } catch (error) {
          console.error("Error publish quiz:", error);
      }  };

  const handlePublish = () => {
    const questionDataList = JSON.parse(sessionStorage.getItem("questionDataList")
    );
    const modifiedImageURL = quizData.selectedImage.image.lastIndexOf("/")
    const usedImage= quizData.selectedImage.image.substring(modifiedImageURL+1);

    const questions = questionDataList.map((question)=>({
      answer:question.answer,
      explanation: question.explanation,
      questionContent: question.questionContent,
      options:[question.option1,question.option2, question.option3, question.option4],
      questionType: question.questionType,
    }))
    const publishData = {
        title: quizData.quizName,
        topic: quizData.topic,
        imageUrl: usedImage,
        subjectType: quizData.subject,
        timeLimit: quizData.timeLimit,
        totalMarks: quizData.point,
        description: quizData.description,
        questions: questions,
    };
console.log(publishData);
    const token = localStorage.getItem("jwtToken");

    try {
      const response = axios.post(
        "http://localhost:8080/api/v1/quiz/create-quiz",
        publishData,
        {
          params: {
            isPublish: true,
          },
          withCredentials: true,
           headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
          },
        }
      );

      console.log("Quiz save successfully:", publishData);
      alert("Quiz saved successfully:", response.data);
      navigate("/dashboard");

      sessionStorage.clear();
    } catch (error) {
      console.error("Error publish quiz:", error);
    }
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  const formattedDate = currentDateTime.toLocaleDateString();

  return (
    <div className="container-question-preview">
      <div className="grid-container-column-question-preview">
        <h2 className="quiz-name-text">{quizData.quizName}</h2>
        <div className="grid-item-question-preview">
          <input
            className="select-button"
            type="text"
            id="dateOfQuiz"
            name="quizDate"
            value={formattedDate}
            readOnly
          />
          TimeLimit:{" "}
          <input
            className="select-button"
            id="timeLimit"
            name="timeLimit"
            value={quizData.timeLimit}
            placeholder="timeLimit"
            readOnly
          />
          Points:{" "}
          <input
            className="select-button"
            id="points"
            name="points"
            value={quizData.point}
            readOnly
          />
          <a className="cancel" onClick={handleSave}>
            Save
          </a>
          <button className="publish-quiz" onClick={handlePublish}>
            <img className="publish-img" src="src/assets/icons/Publish.svg" />
            Publish Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPreviewHeader;
