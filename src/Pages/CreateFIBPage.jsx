import React from "react";
import CancelSaveHeader from "../Components/CreateFIBPage/CancelSaveHeader/CancelSaveHeader";
import TypeFIB from "../Components/CreateFIBPage/TypeFIB";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateFIBPage = () => {
  const [questionData, setQuestionData] = useState({
    questionContent: "",
    answer: "",
    questionType: "FILL_IN_BLANK",
    explanation: "",
    point: 0,
  });
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("saving quiz:", questionData);
    const existingListString = sessionStorage.getItem("questionDataList");
    let existingList = [];
    if (existingListString) {
      existingList = JSON.parse(existingListString);
    }
    existingList.push(questionData);
    sessionStorage.setItem("questionDataList", JSON.stringify(existingList));
    navigate("/quiz-preview");
  };
  const handleCancel = () => {
    console.log("canceling");
    navigate(-1);
  };
  return (
    <div>
      <CancelSaveHeader onSave={handleSave} onCancel={handleCancel} />
      <TypeFIB questionData={questionData} setQuestionData={setQuestionData} />
    </div>
  );
};

export default CreateFIBPage;
