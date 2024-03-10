import React, { useEffect, useState } from 'react'
import './ListOfQuiz.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import arrowLeft from "/src/assets/icons/arrow-left.svg";
import geniusesImg from "/src/assets/icons/geniuses.svg";
import acctAvatarImg from "/src/assets/icons/account-avatar.svg";

const ListOfQuiz = () => {
  const[quiz, setQuiz] = useState([])
  const { subjectName } = useParams();


  const getAllQuizBySubject = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/quiz/quizzes-by-subject/${subjectName}`);
      // ".data" is necessary to return the data from the backend
      setQuiz(result.data);
    } catch (error) {
      console.error("Error fetching Quiz:", error.message);
    }
  };
  
  useEffect(() => {
    getAllQuizBySubject();
  }, []);
  


  console.log(quiz);
  return (
    <div className='container-listOfQuiz'>
      <Link to="/dashboard" className="custom-link-style">
    <button  className="create-back-button">
        <img
          className="create-new-quiz-img"
          src={arrowLeft}
         alt="arrowLeftImg"/>
        Back
      </button>
      </Link>
    <div className="container-dashboard-body">
      <div className="banner-img-dashboard-body">
        <div className="banner-text-listOfQuiz">
          <h2 className="banner-header-title-listOfQuiz">
            {subjectName}
          </h2>
        </div>
        <img
          className="banner-purple-img1"
          src={geniusesImg}
         alt="geniusesImg"/>
        
      </div>
    </div>
    <h3 className="explore-quiz">Test your knowledge on advance {subjectName}</h3>
    <div className="grid-container-listOfQuiz">

      {/*ONE QUIZ */}
      {quiz.map((quizzes) => (

          <Link to={`/invite-students/${quizzes.id}`} key={quizzes.id} className="grid-item-listOfQuiz">
        <div className="quiz-image-and-question">
        <img className="quiz-image-img" src={`http://localhost:8080/${quizzes.imageUrl}`} />
        </div>
        <p className='num-of-questions'>{quizzes.questionCount} Qs</p>
        <div className="quiz-h5">
        <h5 className="quiz-name-listOfQuiz">{quizzes.topic}</h5>
        <img src={acctAvatarImg} alt="acctAvatarImg"/> <p>{quizzes.userFirstName} {quizzes.userLastName}</p>
        </div>
          </Link>
      ))}
      {/*END ONE QUIZ */}

    </div>
    </div>
  )
}

export default ListOfQuiz;