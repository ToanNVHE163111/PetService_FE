import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/forgot.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

const Forgot_Password = () => {
  const [gmail, setGmail] = useState();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/users/forgot-password", { gmail })
      .then((res) => {
        if (res.data.Status === "Success") {
            toast.success("Success")
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="form-container">
      <div className="logo-container">Forgot Password</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setGmail(e.target.value)}
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
