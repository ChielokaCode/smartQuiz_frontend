import React, { useState } from "react";
import "./ResetP.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import passwordUpdateImg from "/src/assets/icons/PasswordUpdateSuccessful.svg";
import resetPasswordImg from "/src/assets/icons/ResetPassword.png";

const ResetP = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        newPassword: "",
        newConfirmPassword: "",
    });

    const { newPassword, newConfirmPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                `http://localhost:8080/api/v1/user/resetPassword/${token}`,
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

            setModalMessage("Password Updated Successfully!");

            // Set a 5-second delay before navigating to "/signin"
            setTimeout(() => {
                navigate("/signin/signin");
            }, 1000);
        } catch (error) {
            // Handle the error here
            console.error("Error during password reset:", error);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred during password updating. Please try again.";

            setStatus(false);
            setErrorMessage("Error");

            setShowModal(true);
            setModalMessage(errorMessage);
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
        setModalMessage("");
    };

    const styles = {
        backgroundImage: `url(${resetPasswordImg})`,
        display: 'flex',
        width: '840px',
        height: '1024px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        right: '10px',
        bottom: '5px',
        maxWidth: '55%',
    };

    return (
        <div className="grid-container-signup">
            <div className="grid-item-signup">
                <div className="form-table">
                    <div className="top-form">
                        <Link className="link-text" to="/"><h3 className="SQ-text">Smart Quiz</h3></Link>
                        <h3 className="createAcct-text">Reset your Password</h3>
                    </div>
                    <div className="form-proper">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="single-input-field">
                                <label className="label" htmlFor="newPassword">
                                    Password:
                                </label>
                                <input
                                    className="input-field"
                                    type="password"
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter your new Password..."
                                    required
                                />
                            </div>
                            <div className="single-input-field">
                                <label className="label" htmlFor="newConfirmPassword">
                                    Confirm Password:
                                </label>
                                <input
                                    className="input-field"
                                    type="password"
                                    name="newConfirmPassword"
                                    value={newConfirmPassword}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Re-enter your new Password..."
                                    required
                                />
                            </div>
                            <button type="submit" className="button-cta">
                                Reset Password
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
                                        <img src={passwordUpdateImg} alt="passwordUpdateImg"/>
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

                    </div>
                </div>
            </div>

            <div style={styles}/>
        </div>
    );
};

export default ResetP;