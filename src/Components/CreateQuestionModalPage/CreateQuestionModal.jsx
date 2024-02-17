import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateQuestionModal.css'

const CreateQuestionModal = () => {
  const navigate = useNavigate();
const handleQuestionTypeClick =(questionType)=>{
sessionStorage.setItem('selectedQuestionType', questionType)
navigate(`/${questionType}`);
}

  return (
    <div className='createquestionTypes'>
  <p className='createquestionTypesparagragh'>Questions Types</p>
      <div className='createQuestion-grid-container'>
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("FILL_IN_BLANK")}> <img src='src/Components/CreateQuestionModalPage/fillingap.png' alt='fillInGap' className='questionTypesimg'/>Fill in the Blank</div>
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("MULTIPLE_CHOICE")}> <img src='src/Components/CreateQuestionModalPage/multiplechoice.png' alt='multiple choice' className='questionTypesimg'/>Multiple choice</div>
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("DRAG_AND_DROP")}> <img src='src/Components/CreateQuestionModalPage/draganddrop.png'  alt= 'drag and drop' className='questionTypesimg'/>Drag and drop</div>

      </div>
    </div>
  )
}

export default CreateQuestionModal