import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TotalServices = () => {
  return (
    <Container fluid>
          <div className="carda">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Services</h5>
                <h2 className="mb-0"> 10,28,056</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-info-light mt-1">
                <i className="fa fa-eye fa-fw fa-sm text-info"></i>
              </div>
            </div>
          </div>
    </Container>
  );
};

export default TotalServices;
