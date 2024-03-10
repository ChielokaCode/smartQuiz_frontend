import "./CancelSaveHeader.css";
import handImg from "/src/assets/icons/hand.png";

const CancelSaveHeader = ({ onSave, onCancel }) => {
  return (
    <div className="dragHeader">
      <div className="dragHheaderMultichoice">
        <img src={handImg}/>{" "}
        Drag and Drop
      </div>
      <div className="dragQuestionButton">
        <button className="dragHeaderCancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="dragHeaderSave" onClick={onSave}>
          Save Question
        </button>
      </div>
    </div>
  );
};

export default CancelSaveHeader;
