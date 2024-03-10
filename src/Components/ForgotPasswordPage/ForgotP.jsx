import React, { useState } from "react";
import "./ForgotP.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import emailSentImg from "/src/assets/icons/EmailSentSuccessfully.svg";
import forgotPasswordImg from "/src/assets/icons/ForgotPassword.png";

const ForgotP = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
    });
    const { email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:8080/api/v1/user/forgotPassword",
                user,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setShowModal(true);
            setStatus(true);
            setSuccessMessage("Success");

            setModalMessage("Password Reset Email Sent Successfully!");

            // Set a 5-second delay before navigating to "/signin"
            setTimeout(() => {
                navigate("/reset-password");
            }, 1000);
        } catch (error) {
            // Handle the error here
            console.error("Error during password reset:", error);

            setStatus(false);
            setErrorMessage("Error");

            setShowModal(true);
            setModalMessage(
                "An error occurred during sending password reset email. Please try again."
            );
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
        setModalMessage("");
    };

    const styles = {
        backgroundImage: `url(${forgotPasswordImg})`,
        display: 'flex',
        width: '840px',
        height: '1024px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        right:'10px',
        bottom: '5px',
        maxWidth: '55%'
    }

    return (
        <div className="grid-container-signup">
            <div className="grid-item-signup">
                <div className="form-table">
                    <div className="top-form">
                        <Link className="link-text" to="/"><h3 className="SQ-text">Smart Quiz</h3></Link>
                        <h3 className="createAcct-text">Reset Password</h3>
                        <p className="resetPassword-text">
                            Enter your email below and we’ll send you instructions on how to
                            reset your password.
                        </p>
                    </div>
                    <div className="form-proper">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="single-input-field">
                                <label className="label" htmlFor="email">
                                    Email Address:
                                </label>
                                <input
                                    className="input-field"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter your Email..."
                                    required
                                />
                            </div>
                            <button type="submit" className="button-cta">
                                Send Reset Instructions
                            </button>
                        </form>

                        <div className={`modal-forgot ${showModal ? 'show' : ''}`}>
                            <div className="modal-container-forgot">
                                <div className="modal-title-forgot">
                                        <Modal.Title>
                                            {status ? successMessage : errorMessage}
                                        </Modal.Title>
                                </div>
                                <div>
                                    <div className="icon-forgot">
                                        <img src={emailSentImg} alt="emailSentImg"/>
                                    </div>
                                    <div className="text-body-forgot">
                                        <Modal.Body>
                                            {modalMessage}
                                        </Modal.Body>
                                    </div>
                                    <Modal.Footer>
                                        <Button
                                            className="modal-button-forgot"
                                            onClick={handleClose}>
                                            Continue
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            </div>
                        </div>

                        <p className="alreadyHaveAnAcct">
                            Already have an account?{" "}
                            <Link to="/signin/signin">
                                <a href="#">Sign In here</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles}/>
        </div>
    );
};
export default ForgotP;