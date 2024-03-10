import React from "react";
import "./DashboardHeader.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import searchImg from "/src/assets/icons/Search.svg";
import filterImg from "/src/assets/icons/Filter.svg";
import exploreImg from "/src/assets/icons/Explore.svg";
import libraryImg from "/src/assets/icons/Library.svg";

const DashboardHeader = () => {
    const navigate = useNavigate();

  const onLogOut = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/v1/user/logout");

      localStorage.removeItem('token');      
      navigate("/");
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  return (
    <div className="grid-container-dashboard-header-dashboardHeader">
      <h3 className="smart-quiz-dashboard-text-dashboardHeader">Smart Quiz</h3>
      <div className="search-container-dashboardHeader">
        <form action="#">
          <img className="search-img-dashboardHeader" src={searchImg}  alt="searchImg"/>
          <input type="search" placeholder="Search.." name="search" />
          <img className="search-img-dashboardHeader" src={filterImg}  alt="filterImg"/>
        </form>
      </div>
      <div className="grid-item-dashboard-header-dashboardHeader">
        <img className="explore-img-dashboardHeader" src={exploreImg}  alt="exploreImg"/>
        <span className="explore-dashboardHeader">
          <a href="#">Explore</a>
        </span>
        <img className="library-img-dashboardHeader" src={libraryImg}  alt="libraryImg"/>
        <span className="library-dashboardHeader">
          <a href="#">My Library</a>
        </span>
      </div>
      <form onSubmit={(e) => onLogOut(e)}>
        <button className="account-img-dashboardHeader">LogOut</button>
      </form>
    </div>
  );
};

export default DashboardHeader;