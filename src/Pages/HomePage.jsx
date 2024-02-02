import React from "react";
import Header from "../Components/HomePage/Header/Header";
import Hero from "../Components/HomePage/Hero/Hero";
import SmartQuiz from "../Components/HomePage/SmartQuizServices/SmartQuiz";
import Offerings from "../Components/HomePage/Offerings/Offerings";
import Footer from "../Components/HomePage/Footer/Footer";

const HomePage = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Header />
      <Hero />
      <SmartQuiz />
      <Offerings />
      <Footer />
    </div>
  );
};

export default HomePage;
