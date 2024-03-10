import React, { useEffect, useState } from 'react';
import './TakeQuiz.css';
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import timerImg from "/src/assets/icons/timer.svg";

const TakeQuiz = () => {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const [currentStep, setCurrentStep] = useState(1)
    const [quiz, setQuiz] = useState(null);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [studentResponses, setStudentResponses] = useState([]);
    const [draggedOption, setDraggedOption] = useState(null);
    // const [selectedAnswers, setSelectedAnswers] = useState([{ id: "", answer: "" }])
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [studentResponse, setStudentResponse] = useState("");

    const [totalScores, setTotalScores] = useState(0)
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        fetchQuiz();
    }, []);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const fetchQuiz = async () => {
        const token = localStorage.getItem("jwtToken");
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/quiz/take-quiz/${quizId}`, {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            setQuiz(result.data);
            setTimeLeft(result.data.timeLimit * 60);
            setQuizQuestions(result.data.questions);
            // Initialize selectedOptions array
            const initialSelectedOptions = new Array(result.data.questions.length).fill('');
            setSelectedOptions(initialSelectedOptions);
        } catch (error) {
            console.error("Error during fetching questions:", error);
        }
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;






    const handleSubmit = async (e) => {
        e.preventDefault();
        let scores = 0;
        quizQuestions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                scores++;// Add points for the correct answer
                // scores = (scores / quiz.questions.length) * 100;
            }

            console.log(selectedOptions);
            console.log(question.answer);

            // Calculate total scores
            });

        try{
            const totalScores = (scores / quizQuestions.length) * 100;
            const token = localStorage.getItem("jwtToken");

            const studentResponse = {
                scores: totalScores,
            };
            //Send the student score to the server
                    await axios.post(`http://localhost:8080/api/v1/quiz/${quizId}/submit`, studentResponse, {
                        withCredentials: true,
                        headers: {
                            "Access-Control-Allow-Credentials": "true",
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
            console.log("Total Scores:", totalScores);
            navigate(`/performance/${totalScores}`);
            // setSelectedAnswers([]); // Clear selected answers array
            setCurrentQuestionIndex(0);
        }catch (error){
            console.log(error);
            alert("Error while submitting quiz!");
        }
    };
    const handleNextQuestion = (selectedOption) => {
        // Save the selected option for the current question
        setSelectedOptions(prevSelectedOptions => {
            const updatedOptions = [...prevSelectedOptions];
            updatedOptions[currentQuestionIndex] = selectedOption;
            return updatedOptions;
        });

        // Move to the next question
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setCurrentStep(prevStep => prevStep + 1);
    }


    const handlePreviousQuestion = () => {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
            setCurrentStep((prevStep) => prevStep - 1)
        }
    const handleOptionChange = (questionId, selectedOption) => {
        setStudentResponse(selectedOption);
        setSelectedOptions(prevSelectedOptions => {
            const updatedOptions = [...prevSelectedOptions];
            const questionIndex = quizQuestions.findIndex(question => question.id === questionId);
            updatedOptions[questionIndex] = selectedOption;
            console.log("Updated selected options:", updatedOptions); // Log updated options
            return updatedOptions;
        });
    };





    const renderProgressBar = () => {
        const progress = currentStep === quiz.questions.length ? 100 : ((currentStep - 1) / 2) * 100
        return (
            <div className="progress-takeQuiz">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}>

                </div>
            </div>
        )
    }




    const currentQuestion = quiz?.questions[currentQuestionIndex];

    const dragpoint = (event) => {
        event.dataTransfer.setData("text", event.target.id);
        setDraggedOption(event.target.id);
    }

    // Function to allow dropping an option
    const allowDropOption = (ev) => {
        ev.preventDefault();
        if (draggedOption && draggedOption !== ev.target.id) {
            ev.target.style.border = "2px dashed #ccc";
        }
    }

    // Function to handle dropping an option
    const droppoint = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var draggedOption = document.getElementById(data);
        var dropzone = document.getElementById("dropzone");

        if (draggedOption.getAttribute("data-droppable") !== "false" && !dropzone.firstChild) {
            if (dropzone.firstChild) {
                var originalParent = document.getElementById(draggedOption.getAttribute("data-parent"));
                originalParent.appendChild(draggedOption);
                draggedOption.setAttribute("data-droppable", "false");
            } else {
                ev.target.appendChild(draggedOption);
                draggedOption.setAttribute("data-droppable", "false");
                draggedOption.setAttribute("data-parent", ev.target.id);
            }
        }
    }

    // Function to allow dropping into the drop zone
    const allowDropQuestion = (ev) => {
        ev.preventDefault();
        var dropzone = document.getElementById("dropzone");
        dropzone.style.border = "2px dashed #aaa";
    }

    // Function to handle drag end
    const dragend = (ev) => {
        var draggedOption = document.getElementById(ev.target.id);
        draggedOption.style.border = "2px dashed #ccc";
        draggedOption.setAttribute("data-droppable", "true");
    }



    return (
        <div className="headercontainer-takequiz">
            {quiz && currentQuestion ? (
                <div >
                     {/*<form onSubmit={(e) => handleSubmit(e)}>*/}
                    <div className="item">{currentQuestionIndex + 1} of {quiz.questions.length}</div>
                    <div className="item">
                        <img src={timerImg} alt="Timer" />
                        <h5>Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h5>
                    </div>
                    <div className="container-takequiz">
                        {renderProgressBar()}
                    </div>
                    <div className="inner-takequiz">
                        <h3 className="h3-text-takeQuiz">{currentQuestion.questionContent}</h3>

                        {currentQuestion.questionType === 'MULTIPLE_CHOICE' && (
                            <div className="grid-container-takequiz">
                                {currentQuestion.options.sort().map((option) => (
                                    <div className="grid-item-takequiz" key={option}>
                                        <input
                                            type="radio"
                                            id={option}
                                            name={`question_${currentQuestion.id}`} // Use the currentQuestion.id for uniqueness
                                            value={option}
                                            // checked={selectedOptions[index] === option}
                                            onChange={() => handleOptionChange(currentQuestion.id, option)} // Pass the question id
                                        />
                                        <label htmlFor={option} className="form-check-label ms-2">
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}


                        {currentQuestion.questionType === 'DRAG_AND_DROP' && (
                            <div>
                                <div className="dropbox" onDrop={(event) => droppoint(event)}
                                     onDragOver={(event) => allowDropQuestion(event)}>
                                    <h3 style={{textAlign: 'center'}}>Drag your question here............... </h3>
                                    <div className="dropzone" id="dropzone">
                                        {/* Render the dropped answer */}
                                        {studentResponses && <label>{studentResponses}</label>}
                                    </div>
                                </div>
                                <div className="drag-option">
                                    <div className="columnA">
                                        {currentQuestion.options.sort().map(option => (
                                            <div key={option} className="dropbox-option"
                                                 onDrop={(event) => droppoint(event)}
                                                 onDragOver={(event) => allowDropOption(event)}>
                                                <label id={option} draggable="true"
                                                       onDragStart={(event) => dragpoint(event)}
                                                       onDragEnd={(event) => dragend(event)}
                                                       style={{backgroundColor: 'blue', color: 'whitesmoke'}}
                                                       data-droppable="false">
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentQuestion.questionType === 'FILL_IN_BLANK' && (
                            <input
                                type="text"
                                placeholder="Type your answer here"
                                style={{
                                            padding: "20px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            width: "600px",
                                        }}

                               // value={studentResponse}
                                onChange={(e) => handleOptionChange(currentQuestion.id, e.target.value)}
                            />
                        )}


                        <div className="button-class">
                            {currentQuestionIndex > 0 && (
                                <button className="previous-button" onClick={handlePreviousQuestion}
                                        draggable="false">Previous</button>
                            )}
                            {currentQuestionIndex < quiz.questions.length - 1 ? (
                                <button className="next-button" onClick={() => handleNextQuestion(selectedOptions)}>Next</button>
                            ) : (
                                <button type="submit" onSubmit={handleSubmit} className="next-button">Submit</button>
                            )}
                        </div>
                        <h5>{currentQuestion.explanation}</h5>
                    </div>

                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TakeQuiz;
