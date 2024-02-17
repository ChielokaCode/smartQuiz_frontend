import React, {useState} from 'react';
import './InviteStudents.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Modal} from "react-bootstrap";

const InviteStudents = () => {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const [user, setUser] = useState({
        email: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { email } = user
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(quizId)
            const token = localStorage.getItem("jwtToken");
            console.log(token);
            const response = await axios.post(
                `http://localhost:8080/api/v1/quiz/send-invite-link/${quizId}`,user,
                {

                    withCredentials: true,
                    headers: {
                        "Access-Control-Allow-Credentials": "true",
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );


            setShowModal(true);
            setStatus(true);
            setSuccessMessage("Success");

            setModalMessage(response.data);
            console.log(response.data)
            console.log(email)

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);

        } catch (error) {
            // Handle the error here
            console.error("Error during sending emails:", error);
            const errorMessage =
                error.response?.data?.message ||
                "Error sending mail";

            setStatus(false);
            setErrorMessage("Error");

            setShowModal(true);
            setModalMessage(errorMessage);
        }
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
        setModalMessage("");
    };

    return (
        <div className="wholepage-invite">
            <div className="inner-invite">
                <div className="top-invite">
                    <p>Invite Your Students</p>
                    <Link to="/dashboard" >
                        <button type="submit" className="cancel-invite">
                            <img src="../src/assets/icons/cancel.svg" width="30px" height="30px"/>
                        </button>
                    </Link>
                </div>
                <br/><br/>
                <p>Invite your students by email:</p><br/><br/>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="input-invite">
                        <input type="text"
                               id="emailInput"
                               name="email"
                               style={{width: "200px"}}
                               placeholder="Enter email addresses..."
                               value={email}
                               onChange={(e) => onInputChange(e)}
                               required
                        />
                        <button type="submit" style={{width: "100px"}}>Send Invites</button>
                    </div>
                </form>
                <h3>Share on social media</h3>
                <div className="social-invite">
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/Facebook.svg" alt="Facebook" width="30px" height="30px"/>
                    </button>
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/Instagram.svg" alt="Facebook" width="30px" height="30px"/>
                    </button>
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/Telegram.svg" alt="Telegram" width="30px" height="30px"/>
                    </button>
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/Twitter.svg" alt="Twitter" width="30px" height="30px"/>
                    </button>
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/mail.svg" alt="Email" width="30px" height="30px"/>
                    </button>
                </div>
                <br/><br/>
                {showModal && (
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {status ? successMessage : errorMessage}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">{modalMessage}</Modal.Body>
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
                )}
                <h3>Your referral link:</h3>
                <div className="inputspacelink-invite">
                    <input type="text" placeholder="https://www.example.com/invite/123456" className="referral"/>
                    <button className="socialmedia-invite" type="submit">
                        <img src="../src/assets/icons/referral.svg" alt="reflink" width="30px" height="30px"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default InviteStudents;