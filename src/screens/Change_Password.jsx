import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { Lock, Unlock } from "react-bootstrap-icons";

const Change_Password = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "70px",
    marginBottom: "70px",
  };

  return (
    <Container>
      
      <Row style={containerStyle}>
      <Row>
        <h4> Change PassWord</h4>
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
              type="password"
            />
          </InputGroup>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Update Password</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Change_Password;
