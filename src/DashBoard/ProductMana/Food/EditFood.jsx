import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PlusSquareFill, X } from "react-bootstrap-icons";
import { Col, FormSelect, Row } from "react-bootstrap";
import '../../../style/addproduct.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditFood = (props) => {
  const { editVisible, setEditVisible, data } = props;
  const onHide = () => {
    setEditVisible(false);
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <Button
        className=" btn btn-success mr-2"
        type="submit"
        form="editProductForm"
      >
        <PlusSquareFill /> Save
      </Button>
      <Button onClick={onHide} className=" btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={editVisible}
        onHide={() => setEditVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Edit Food</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="editProductForm">
              <Row>
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="name">
                      <h6>Product Name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Input product name"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="description">
                      <h6>Description</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Input description"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditFood;
