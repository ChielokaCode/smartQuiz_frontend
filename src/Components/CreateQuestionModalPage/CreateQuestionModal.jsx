import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateQuestionModal.css';
import fillInGapImg from "/src/assets/icons/fillingap.png";
import multichoiceImg from "/src/assets/icons/multiplechoice.png";
import dragDropImg from "/src/assets/icons/draganddrop.png";


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
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("FILL_IN_BLANK")}> <img src={fillInGapImg} alt='fillInGap' className='questionTypesimg'/>Fill in the Blank</div>
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("MULTIPLE_CHOICE")}> <img src={multichoiceImg} alt='multiple choice' className='questionTypesimg'/>Multiple choice</div>
        <div className='questionTypes' onClick={()=> handleQuestionTypeClick("DRAG_AND_DROP")}> <img src={dragDropImg} alt= 'drag and drop' className='questionTypesimg'/>Drag and drop</div>

      </div>
    </div>
  )
}

export default CreateQuestionModal