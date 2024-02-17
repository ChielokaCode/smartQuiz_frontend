import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPPage from "./Pages/ForgotPPage.jsx";
import ResetPPage from "./Pages/ResetPPage.jsx";
import PasswordTokenPage from "./Pages/PasswordTokenPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import ListOfQuizPage from "./Pages/ListOfQuizPage.jsx";
import InviteStudentsPage from "./Pages/InviteStudentsPage.jsx";
import StartQuizPage from "./Pages/StartQuizPage.jsx";
import PerformancePage from "./Pages/PerformancePage.jsx";
import TakeQuizPage from "./Pages/TakeQuizPage.jsx";
import CreateMCQPage from "./Pages/CreateMCQPage.jsx";
import CreateFIBPage from "./Pages/CreateFIBPage.jsx";
import CreateDragAndDropPage from "./Pages/CreateDragAndDropPage.jsx";
import CreateQuestionModalPage from "./Pages/CreateQuestionModalPage.jsx";
import CreateQuizModalPage from "./Pages/CreateQuizModalPage.jsx";
import QuizPreviewPages from "./Pages/QuizPreviewPages.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ReviewAnswerPage from "./Pages/ReviewAnswerPage.jsx";
import QuizResult from "./Pages/QuizP/QuizResult.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
           <Route exact path="/signup" element={<SignUpPage/>}/>
            <Route exact path="/about-us" element={<AboutUsPage/>}/>
            <Route exact path="/review-answers" element={<ReviewAnswerPage/>}/>

            <Route exact path="/dashboard" element={<DashBoardPage/>}/>
            <Route exact path="/performance/:scores" element={<PerformancePage/>}/>
            <Route exact path="/list-of-quiz/:subjectName" element={<ListOfQuizPage/>}/>
            <Route exact path="/signin/:credential" element={<SignInPage/>} />
            <Route exact path="/forgot-password" element={<ForgotPPage />} />
            <Route exact path="/reset-password" element={<PasswordTokenPage />} />
            <Route exact path="/reset-password/:token" element={<ResetPPage />} />
            <Route exact path="/invite-students/:quizId" element={<InviteStudentsPage />} />
            <Route exact path="/start-quiz/:quizId" element={<StartQuizPage/>} />
            <Route exact path="/take-quiz/:quizId" element={<TakeQuizPage/>}/>

            <Route exact path="/MULTIPLE_CHOICE" element={<CreateMCQPage/>}/>
            <Route exact path="/FILL_IN_BLANK" element={<CreateFIBPage/>}/>
            <Route exact path="/DRAG_AND_DROP" element={<CreateDragAndDropPage/>}/>
            <Route exact path="/create-question" element={<CreateQuestionModalPage/>}/>
            <Route exact path="/create-quiz" element={<CreateQuizModalPage/>}/>
            <Route exact path="/quiz-preview" element={<QuizPreviewPages/>}/>
            <Route exact path="/quiz-result" element={<QuizResult />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
