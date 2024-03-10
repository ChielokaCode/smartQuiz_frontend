import React, { useState } from "react";
import "./PasswordRToken.css";
import { Link, useNavigate } from "react-router-dom";
import forgotPasswordImg from "/src/assets/icons/ForgotPassord.svg";

const PasswordRToken = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        // Validate the token or perform any necessary checks
        if (token.length === 6 && /^\d+$/.test(token)) {
            // If the token is a six-digit number, navigate to the next page
            navigate(`/reset-password/${token}`);
        } else {
            // Handle the case where the token is invalid
            console.error("Invalid token");
            // You can display an error message, show a modal, or take appropriate action.
        }
    };

    const styles  = {
            backgroundImage: `url(${forgotPasswordImg})`,
            display: 'flex',
            width: '840px',
            height: '1024px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            right: '10px',
            bottom: '5px',
            maxWidth: '55%'
        };

    return (
        <div className="grid-container-signup">
            <div className="grid-item-signup">
                <div className="form-table">
                    <div className="top-form">
                        <Link className="link-text" to="/"><h3 className="SQ-text">Smart Quiz</h3></Link>
                        <h3 className="createAcct-text">Reset Password</h3>
                        <p className="resetPassword-text">
                            Enter your six digit code sent to your email, Code will expire in
                            the next 10 mins
                        </p>
                    </div>
                    <div className="form-proper">
                        <div className="single-input-field">
                            <label className="label" htmlFor="token">
                                Enter Six-digit Code:
                            </label>
                            <input
                                className="input-field"
                                type="text"
                                name="token"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                placeholder="Enter your Code..."
                                required
                            />
                        </div>
                        <button onClick={handleNext} className="button-cta">
                            Submit
                        </button>

                        <p className="alreadyHaveAnAcct">
                            Already have an account?
                            <Link to="/signin/signin">
                                <a href="#">Sign In here</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles} />
        </div>
    );
};

export default PasswordRToken;