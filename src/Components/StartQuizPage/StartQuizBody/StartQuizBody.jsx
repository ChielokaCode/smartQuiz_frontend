import React, {useEffect, useState} from "react";
import "./StartQuizBody.css";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

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
                <img src="../src/assets/icons/arrow-left.svg"/>
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
                  <img src="../src/assets/icons/account-avatar.svg"/>
                  <div className="time-startquiz">
                    <p> {quizs.userFirstName}</p>
                    <h6>{quizs.userLastName}</h6>
                  </div>
                </div>
                <div className="time-startquiz">
                  <img src="../src/assets/icons/question mark.svg"/>
                  <p> {quizs.questionCount} Questions</p>
                </div>
                <div className="time-startquiz">
                  <img src="../src/assets/icons/Time.svg"/>
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
            <img src="../src/assets/icons/Play.svg"/>
            <span>Start Quiz</span>
          </button></Link>


        </div>

      </div>
  );
}

export default StartQuizBody;
