import React, { useEffect, useState } from "react";
import "./DashboardBody.css";
import { getAllSubjects } from "../../../utils/apiFunctions";
import { Link } from "react-router-dom";
import  whiteStarsImg from "/src/assets/icons/WhiteStars.svg";
import arrowRightImg from "/src/assets/icons/arrow-right.svg";
import bannerImg1 from "/src/assets/icons/banner-img1.svg";
import bannerImg2 from "/src/assets/icons/banner-img2.svg";
import loadingImg from "/src/assets/icons/loading.png";

const DashboardBody = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchSubjects();
  }, []);

  // Function to fetch subjects from the API
  const fetchSubjects = async () => {
    setIsLoading(true);
    try {
      const result = await getAllSubjects();
      setSubjects(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching subjects:", error.message);
      setIsLoading(false);
    }
  };


  console.log(subjects);
  return (
    <div className="container-dashboard-body">
      <Link to="/create-quiz">
        <button className="create-new-quiz-button">
        <img
          className="create-new-quiz-img"
          src={whiteStarsImg}
        />
        Create Quiz
      </button></Link>
      <div className="banner-img-dashboard-body">
        <div className="banner-text">
          <h2 className="banner-header-title">
            Unlock Insights, Elevate Teaching: Explore Performance Analytics and
            Reviews for Comprehensive Educator Assessment
          </h2>
          <p className="banner-header-paragraph">
            <a href="#">View Performance Journey</a>
            <img src={arrowRightImg} />
          </p>
        </div>
        <img
          className="banner-purple-img1"
          src={bannerImg1}
        />
        <img
          className="banner-purple-img2"
          src={bannerImg2}
        />
      </div>
      <h3 className="explore-subjects">Explore Subjects</h3>
      {isLoading ? (
        <img className="loading-icon" src={loadingImg}/>
      ) : (
        <>
          {/* one subject */}
          <div className="grid-container-dashboard-body">
            {subjects.map((subject) => (
              <Link to={`/list-of-quiz/${subject.name}`} key={subject.id} className="grid-item-dashboard-body custom-link-style">                
              <div className="subjects-div">
                  <div
                    style={{ background: subject.backgroundColor }}
                    className="fetched-subject-img"
                  >
                    <img
                      src={`http://localhost:8080${subject.imageFilename}`}
                      alt={`${subject.name} image`}
                    />
                  </div>
                  <h4>{subject.name}</h4>
                  <p>{subject.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      {/* one subject */}
    </div>
  );
};

export default DashboardBody;