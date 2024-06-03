import React from "react";
import "../style/forgot.css";
import { Container } from "react-bootstrap";
const Forgot_Password = () => {
  return (
    <Container className="form-container">
      <div className="logo-container">Forgot Password</div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button className="form-submit-btn" type="submit">
          Send Email
        </button>
      </form>
      <p className="signup-link">
        Don't have an account?
        <a href="/register" className="signup-link link">
          {" "}
          Sign up now
        </a>
      </p>
    </Container>
  );
};

export default Forgot_Password;
