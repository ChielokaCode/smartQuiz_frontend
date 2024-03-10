import React from 'react'
import './Publish.css'
import { useNavigate } from 'react-router-dom';
import arrowImg from "/src/assets/icons/arrow.png";
import publishImg from "/src/assets/icons/Publish.png";
const PublishButton = () => {
  const navigate = useNavigate();
function handleBack(){
navigate(-1);
}


  return (
    <div className='publish-button'>
        <div className='publishButton-title'>
        <img src={arrowImg} alt='arrow' className='arrowIcon' onClick={handleBack}/> Untitled Quiz
        </div>
        <div className='publishbuttondiv'>
       <button className='publishbutton'> <img src={publishImg} alt='publishbutton' className='publishIcon'/>Publish Quiz</button>
        </div>
    </div>
  )
}

export default PublishButton