import React, {useEffect, useState} from "react";
import "./StartQuizBody.css";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import arrowLeftImg from "/src/assets/icons/arrow-left.svg";
import acctAvatarImg from "/src/assets/icons/account-avatar.svg";
import questionMarkImg from "/src/assets/icons/question mark.svg";
import timeImg from "/src/assets/icons/Time.svg";
import playImg from "/src/assets/icons/Play.svg";

const StartQuizBody = () => {
  const [quizs, setQuizs] = useState([]);
  const {quizId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/quiz/take-quiz/${quizId}`);
      setQuizs(result.data);
    } catch (error) {
      setError("Error fetching quiz data.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(quizs);
  return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
            <div key={quizs.id} className="container-dashboard-body">
              <button className="back-black-icon">
                <img src={arrowLeftImg} alt="arrowLeftImg"/>
                Back
              </button>

              <div className="banner-img-dashboard-body-startQuizBody">
                <div className="banner-text-startQuizBody">
                  <h2 className="banner-header-title-startQuizBody">
                    {quizs.topic}
                  </h2>
                </div>
                <img
                    className="banner-purple-img1-startQuizBody"
                    src={`http://localhost:8080/${quizs.imageUrl}`}
                />
              </div>

              <div className="grid-container-dashboard-header-startquiz">
                <div className="account-avatar-name-and-email">
                  <img src={acctAvatarImg} alt="acctAvatarImg"/>
                  <div className="time-startquiz">
                    <p> {quizs.userFirstName}</p>
                    <h6>{quizs.userLastName}</h6>
                  </div>
                </div>
                <div className="time-startquiz">
                  <img src={questionMarkImg} alt="questionMarkImg"/>
                  <p> {quizs.questionCount} Questions</p>
                </div>
                <div className="time-startquiz">
                  <img src={timeImg} alt="timeImg"/>
                  <p> {quizs.timeLimit} Minutes</p>
                </div>
              </div>

              <div className="description-startQuiz">
                <h4>Description</h4>
                <p>
                  {quizs.description}
                </p>
              </div>
            </div>
        <div className="button-btn">

          <Link to={`/take-quiz/${quizId}`}><button className="start-quiz-btn-startQuizBody">
            <img src={playImg} alt="playImg"/>
            <span>Start Quiz</span>
          </button></Link>


        </div>

      </div>
  );
}

export default StartQuizBody;
