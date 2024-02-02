import "./App.css";
import DashboardPage from "./Pages/DashboardPage";
import ForgotPPage from "./Pages/ForgotPPage";
import HomePage from "./Pages/HomePage";
import PasswordTokenPage from "./Pages/PasswordTokenPage";
import QuestionPreviewPage from "./Pages/QuestionPreviewPage";
import ResetPPage from "./Pages/ResetPPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/signin/:credential" element={<SignInPage />} />
          <Route exact path="/forgot-password" element={<ForgotPPage />} />
          <Route exact path="/reset-password" element={<PasswordTokenPage />} />
          <Route exact path="/reset-password/:token" element={<ResetPPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route
            exact
            path="/create-question"
            element={<QuestionPreviewPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
