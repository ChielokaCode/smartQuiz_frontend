import React from "react";
import "./StartQuizHeader.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StartQuizHeader = () => {
    const navigate = useNavigate();

    const onLogOut = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/v1/user/logout");
            localStorage.removeItem("jwtToken");
            navigate("/");
        } catch (error) {
            // Handle the error here
            console.log(error);
        }
    };
    return (
        <div className="grid-container-dashboard-header">
            <h3 className="smart-quiz-dashboard-text">Smart Quiz</h3>
            <div className="search-container-smartQuizHeader">
                <form action="#">
                    <img
                        className="search-img-startQuizHeader"
                        src="../src/assets/icons/Search.svg"
                    />
                    <input
                        className="input-search-startQuizHeader"
                        type="search"
                        placeholder="Search.."
                        name="search"
                    />
                    <img
                        className="search-img-startQuizHeader"
                        src="../src/assets/icons/Filter.svg"
                    />
                </form>
            </div>
            <form onSubmit={(e) => onLogOut(e)}>
                <button className="account-img-startQuizHeader">LogOut</button>
            </form>
        </div>
    );
};

export default StartQuizHeader;
