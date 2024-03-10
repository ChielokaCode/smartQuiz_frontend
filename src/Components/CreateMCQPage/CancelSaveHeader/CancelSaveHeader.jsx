import './CancelSaveHeader.css';
import markpicsImg from "/src/assets/icons/markpics.png";
const CancelSaveHeader = ({onSave,onCancel}) => {
  return (
<div className='dragHeader'>
    <div className='dragHheaderMultichoice'><img src={markpicsImg} alt="multichoice" className='dragHeaderMarkPics'/> Multiple Choice </div>
    <div className='dragQuestionButton'>
    <button className='dragHeaderCancel' onClick={onCancel}>Cancel</button>
    <button className='dragHeaderSave' onClick={onSave}>Save Question</button>
    </div> 
    </div> )
}

export default CancelSaveHeader