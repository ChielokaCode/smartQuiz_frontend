import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CancelSaveHeader from '../Components/CreateQuizModalPage/CancelSaveHeader/CancelSaveHeader'
import CreateNewQuiz from '../Components/CreateQuizModalPage/CreateNewQuiz'
const CreateQuizModalPage = () => {
  const  [quizData, setQuizData] = useState({
    quizName:'',
    subject: '',
    topic:'',
    description:'',
    timeLimit: '',
    selectedImage:'',
      });
const navigate= useNavigate();

const handleSave = () =>{
        console.log ('saving quiz:', quizData)
      sessionStorage.setItem('quizData', JSON.stringify(quizData))  
      navigate('/create-question')
      };
const handleCancel = ()=>{
    console.log ("canceling")
    navigate(-1)
}
  return (
    <div className='createQuizModalPage'>
<CancelSaveHeader onCancel={handleCancel}  onSave={handleSave}/>
<CreateNewQuiz  quizData={quizData} setQuizData={setQuizData}/>
    </div>
  )
}

export default CreateQuizModalPage