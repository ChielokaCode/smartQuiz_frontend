import './CancelSaveHeader.css';
const CancelSaveHeader = ({onSave, onCancel}) => {
 
  return (
<div className='QuizHeader'>
    <div className='QuizHheaderMultichoice'><img src="src/Components/CreateQuizModalPage/CancelSaveHeader/Stars.png"/> New Quiz</div>
    <div className='QuizQuestionButton'>
    <button className='QuizHeaderCancel' onClick={onCancel} >Cancel</button>
    <button className='QuizHeaderSave' onClick={onSave} >Save Quiz</button>
    </div> 
    </div> )
}

export default CancelSaveHeader