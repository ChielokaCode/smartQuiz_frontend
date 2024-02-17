import React from "react";
import Header from "../Components/HomePage/Header/Header";
import SmartQuiz from "../Components/HomePage/SmartQuizServices/SmartQuiz";
import Offerings from "../Components/HomePage/Offerings/Offerings";
import Footer from "../Components/HomePage/Footer/Footer";
import Hero from "../Components/HomePage/Hero/Hero.jsx";

const HomePage = () => {
  return (
    <div style={{ marginTop: "30px" }}>
        <Header/>
        <Hero/>
      <SmartQuiz />
      <Offerings />
      <Footer />
    </div>
  );
};

export default HomePage;
