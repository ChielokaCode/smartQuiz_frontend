import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const SignIn = () => {
  const navigate = useNavigate();
  const { credential } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onGoogleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/google/${credential}`
      );

      const token = response.data;

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setShowModal(true);
      setStatus(true);
      setSuccessMessage("Success");

      setModalMessage("Welcome to Smart Quiz App!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      navigate("/dashboard");
      // Handle the error here
      console.error("Error during Login:", error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Login. Please try again.";

      setStatus(false);
      setErrorMessage("Error");

      setShowModal(true);
      setModalMessage(errorMessage);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data;
      console.log(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setShowModal(true);
      setStatus(true);
      setSuccessMessage("Success");

      setModalMessage("Welcome to Smart Quiz App!");

      // Set a 5-second delay before navigating to "/signin"
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      // Handle the error here
      console.error("Error during Login:", error);

      setStatus(false);
      setErrorMessage("Error");

      setShowModal(true);
      setModalMessage("Go to your email to Verify Registration");
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
            <h3 className="createAcct-text">Welcome back to Smart Quiz</h3>
            <form onSubmit={(e) => onGoogleSubmit(e)}>
              <button className="google-button">
                <img id="img6" src="../src/assets/icons/Google.png" />
                <span className="googe-text">Sign In with Google</span>
              </button>
            </form>
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
              <div className="single-input-field">
                <label className="label" htmlFor="password">
                  Password:
                </label>
                <input
                  className="input-field"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter your Password..."
                  required
                />
                <Link to="/forgot-password">
                  <a href="#">Forgot Password</a>
                </Link>
              </div>
              <button type="submit" className="button-cta">
                Login
              </button>
            </form>

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

            <p className="alreadyHaveAnAcct">
              Already have an account?{" "}
              <Link to="/signup">
                <a href="#">Sign up here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div id="img5" />
    </div>
  );
};

export default SignIn;
