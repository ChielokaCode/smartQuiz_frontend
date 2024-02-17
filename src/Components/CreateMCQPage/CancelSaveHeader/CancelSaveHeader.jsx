import './CancelSaveHeader.css';
const CancelSaveHeader = ({onSave,onCancel}) => {
  return (
<div className='dragHeader'>
    <div className='dragHheaderMultichoice'><img src="src/Components/CreateMCQPage/CancelSaveHeader/markpics.png" alt="multichoice" className='dragHeaderMarkPics'/> Multiple Choice </div>
    <div className='dragQuestionButton'>
    <button className='dragHeaderCancel' onClick={onCancel}>Cancel</button>
    <button className='dragHeaderSave' onClick={onSave}>Save Question</button>
    </div> 
    </div> )
}

export default CancelSaveHeader