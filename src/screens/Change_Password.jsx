import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { Lock, Unlock } from "react-bootstrap-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Change_Password = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const password = localStorage.getItem("password");
  const username = localStorage.getItem("username");
  const nav = useNavigate()
  // const token = localStorage.getItem("accessToken");

  const handleUpdate = () => {
    if (!oldPass || !newPass || !reNewPass) {
      toast.error("Please fill in all fields!");
      return;
    }
    if (newPass !== reNewPass) {
      toast.error("New passwords do not match!");
      return;
    }
    if (oldPass !== password) {
      toast.error("Old password is incorrect!");
      return;
    }
    if (oldPass === newPass && oldPass === reNewPass) {
      toast.error("The new password must be different from the old password");
      return;
    }

    console.log(`Sending request to update password for user: ${username}`);
    console.log(`New password: ${newPass}`);

    axios
      .put(
        `http://localhost:9999/users/changepass/${username}`,
        { password: newPass }
        // { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Change password successfully!");
          setOldPass("");
          setNewPass("");
          setReNewPass("");
          nav("/")
          localStorage.setItem("password", newPass);
        } else {
          toast.error("Change password failed!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Change password failed!");
      });
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "70px",
    marginBottom: "70px",
    height: "400px",
  };

  return (
    <Container className="bg-light" style={{ borderRadius: "30px" }}>
      <Row style={containerStyle}>
        <Row style={{ marginTop: "60px", paddingBottom: "20px" }}>
          <h3> Change PassWord</h3>
        </Row>
        <Col md={8}>
          <InputGroup className="mb-3">
            <Lock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />
            <FormControl
              placeholder="Old Password"
              aria-label="Old Password"
              type="password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Unlock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />
            <FormControl
              placeholder="New Password"
              aria-label="New Password"
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Unlock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />

            <FormControl
              placeholder="Re-enter New Password"
              aria-label="Re-enter New Password"
              value={reNewPass}
              onChange={(e) => setReNewPass(e.target.value)}
              type="password"
            />
          </InputGroup>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" onClick={handleUpdate}>
              Update Password
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Change_Password;
