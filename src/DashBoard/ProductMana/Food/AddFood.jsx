import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PlusSquareFill, Trash, TrashFill, X } from "react-bootstrap-icons";
import { Col, FormSelect, Row } from "react-bootstrap";
import "../../../style/addproduct.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFood = (props) => {
  const { visible, setVisible } = props;

  const onHide = () => {
    setVisible(false);
  };
  const dialogFooter = (
    <div style={{ margin: "20px", textAlign:'end' }}>
      <Button
        className="btn btn-success mr-2"
        type="submit"
        form="addProductForm"
      >
        <PlusSquareFill /> Add
      </Button>
      <Button onClick={onHide} className="btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Add Food</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="addProductForm">
              <Row>
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="name">
                      <h6>Food Name</h6>
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
                      <h6>Images</h6>
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
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="congNgheManHinh">
                      <h6>Quantity</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input công nghệ màn hình"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="doPhanGiai">
                      <h6>PetType</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input độ phân giải"
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

export default AddFood;
