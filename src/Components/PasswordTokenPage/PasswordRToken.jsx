import React, { useState } from "react";
import "./PasswordRToken.css";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="grid-container-signup">
      <div className="grid-item-signup">
        <div className="form-table">
          <div className="top-form">
            <h3 className="SQ-text">Smart Quiz</h3>
            <h3 className="createAcct-text">Reset Password</h3>
            <p className="resetPassword-text">
              Enter your six digit code sent to your email, Cose will expire in
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

            {/* <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {status ? successMessage : errorMessage}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
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
            </Modal> */}

            <p className="alreadyHaveAnAcct">
              Already have an account?{" "}
              <Link to="/signin">
                <a href="#">Sign In here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div id="img5-forgotP" />
    </div>
  );
};

export default PasswordRToken;
