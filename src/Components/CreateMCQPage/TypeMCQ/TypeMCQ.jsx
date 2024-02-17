import './TypeMCQ.css';

const TypeMCQ = ({questionData, setQuestionData}) => {

  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setQuestionData(prevData=>({
      ...prevData,[name]: value,
    }));
  };
  return (
<div className='MULTForm'>
        <form className='MULTGridContainer'>
        <input type= "number" id='point' className='Multquestionpoint' placeholder='Point for this question' value={questionData.getPoint} name='point' onChange={handleInputChange} ></input>
< input type= "text" id= "questionContent" className='MULTQuestion' placeholder='Type your question here' value={questionData.getQuestion} name='questionContent' onChange={handleInputChange} ></input>
< input type= "text" id= "option1" className='MULTOption1' placeholder="Type your option" value={questionData.getOption1} name='option1' onChange={handleInputChange}>
</input>
< input type= "text" id= "option2" className='MULTOption2' placeholder='Type your option' value={questionData.getOption2} name='option2' onChange={handleInputChange} ></input>
< input type= "text" id= "option3" className='MULTOption3' placeholder='Type your option' value={questionData.getOption3} name='option3' onChange={handleInputChange}></input>
            < input type= "text" id= "option4" className='MULTOption4' placeholder='Type your option' value={questionData.getOption4} name='option4' onChange={handleInputChange}></input>

            < input type= "text" id= "answer" className='MULTAnswer' placeholder='Type your answer here' value={questionData.getAnswer} name ='answer' onChange={handleInputChange}></input>
< input type= "text" id= "questionType" className='questionType' placeholder='Type your answer here' value= "MULTIPLE_CHOICE" hidden="hidden" readOnly></input>


<textarea id= "explanation" className='MULTexplanation' placeholder='Type your explanation here' value={questionData.getexplanation} name='explanation' onChange={handleInputChange}></textarea>
</form>
        </div>
  )
}

export default TypeMCQ