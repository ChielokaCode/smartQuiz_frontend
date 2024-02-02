import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  const onLogOut = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8080/api/v1/user/logout`);
      navigate("/");
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  return (
    <div className="grid-container-dashboard-header">
      <h3 className="smart-quiz-dashboard-text">Smart Quiz</h3>
      <div className="search-container">
        <form action="#">
          <img className="search-img" src="src/assets/icons/Search.svg" />
          <input type="search" placeholder="Search.." name="search" />
          <img className="search-img" src="src/assets/icons/Filter.svg" />
        </form>
      </div>
      <div className="grid-item-dashboard-header">
        <img className="explore-img" src="src/assets/icons/Explore.svg" />
        <span className="explore">
          <a href="#">Explore</a>
        </span>
        <img className="library-img" src="src/assets/icons/Library.svg" />
        <span className="library">
          <a href="#">My Library</a>
        </span>
      </div>
      <form onSubmit={(e) => onLogOut(e)}>
        <button className="account-img">LogOut</button>
      </form>
    </div>
  );
};

export default DashboardHeader;
