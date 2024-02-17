import CancelSaveHeader from '../Components/CreateMCQPage/CancelSaveHeader/CancelSaveHeader';
import TypeMCQ from '../Components/CreateMCQPage/TypeMCQ/TypeMCQ';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMCQPage = () => {
  const  [questionData, setQuestionData] = useState({
    questionContent:'',
    option1: '',
    option2:'',
    option3:'',
      option4: '',
    answer: '',
    questionType:'MULTIPLE_CHOICE',
    explanation: '',
    point: 0
    
      });
const navigate= useNavigate();

const handleSave = () =>{
        console.log ('saving quiz:', questionData)
const existingListString= sessionStorage.getItem('questionDataList')
let existingList= [];

if(existingListString){
  existingList = JSON.parse(existingListString)
}

existingList.push(questionData)
sessionStorage.setItem('questionDataList', JSON.stringify(existingList))
        navigate('/quiz-preview')
      };
const handleCancel = ()=>{
    console.log ("canceling")
    navigate(-1)
}
  return (
    <div>
      <CancelSaveHeader onSave={handleSave} onCancel={handleCancel}/>
      <TypeMCQ questionData={questionData} setQuestionData={setQuestionData} />

    </div>
  )
}

export default CreateMCQPage;