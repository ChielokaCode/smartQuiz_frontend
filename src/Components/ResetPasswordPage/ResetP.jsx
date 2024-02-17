import React, { useState } from "react";
import "./ResetP.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

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

    return (
        <div className="grid-container-signup">
            <div className="grid-item-signup">
                <div className="form-table">
                    <div className="top-form">
                        <h3 className="SQ-text">Smart Quiz</h3>
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

                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    {status ? successMessage : errorMessage}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body">
                                <img
                                    className="email-sent-img"
                                    src="../src/assets/icons/PasswordUpdateSuccessful.svg"
                                />
                                {modalMessage}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    className="modal-close"
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Continue
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>

            <div id="img5-resetP" />
        </div>
    );
};

export default ResetP;