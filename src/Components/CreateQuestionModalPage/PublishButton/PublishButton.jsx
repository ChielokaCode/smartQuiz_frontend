import React from 'react'
import './Publish.css'
import { useNavigate } from 'react-router-dom'
const PublishButton = () => {
  const navigate = useNavigate();
function handleBack(){
navigate(-1);
}


  return (
    <div className='publish-button'>
        <div className='publishButton-title'>
        <img src='../src/Components/CreateQuestionModalPage/PublishButton/arrow.png' alt='arrow' className='arrowIcon' onClick={handleBack}/> Untitled Quiz
        </div>
        <div className='publishbuttondiv'>
       <button className='publishbutton'> <img src='src/Components/CreateQuestionModalPage/PublishButton/Publish.png' alt='publishbutton' className='publishIcon'/>Publish Quiz</button>
        </div>
    </div>
  )
}

export default PublishButton