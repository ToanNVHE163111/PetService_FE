import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/forgot.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

const ResetPass = () => {
    const navigate = useNavigate();
    
  const [password, setPassword] = useState();
  const { id, token } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9999/users/reset-password/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === "Success") {
          toast.success("Success");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="form-container">
      <div className="logo-container">Reset Password</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">New Password</label>
          <input
            type="password"
            placeholder="Enter your new password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="form-submit-btn" type="submit">
        Update
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

export default ResetPass;
