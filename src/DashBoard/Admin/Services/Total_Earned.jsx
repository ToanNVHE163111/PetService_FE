import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Total_Earned = () => {
  return (
    <Container fluid>
          <div className="carda">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Earned</h5>
                <h2 className="mb-0"> $149.00</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-brand-light mt-1">
                <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
              </div>
            </div>
          </div>
    </Container>
  );
};

export default Total_Earned;
