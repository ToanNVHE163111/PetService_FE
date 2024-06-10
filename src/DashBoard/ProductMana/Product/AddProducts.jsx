import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PlusSquareFill, Trash, TrashFill, X } from "react-bootstrap-icons";
import { Col, Form, FormSelect, Row } from "react-bootstrap";
import "../../../style/addproduct.css";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";
import ComUpImg from "../../../ComeUpImage/ComUpImg";
import { useNavigate } from 'react-router-dom';




const AddProducts = (props) => {
  const { visible, setVisible } = props;
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPettype, setSelectedPettype] = useState(null);
  const [image, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error('Error fetching toys:', error);
      });
  }, []);
  const onHide = () => {
    setVisible(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("pettype", selectedPettype);
      formData.append("category", selectedCategory);
      formData.append("price", price);

      // Thêm các hình ảnh vào formData
      image.forEach((img) => {
        formData.append("image", img);
      });

      await axios.post("http://localhost:9999/products", formData);
      toast.success("Product added successfully!");
      setVisible(false);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.");
    }
  };

  const dialogFooter = (
    <div style={{ margin: "20px", textAlign: 'end' }}>
      <Button
        className="btn btn-success mr-2"
        type="button"
        form="addProductForm"
        onClick={handleSubmit}
      >
        <PlusSquareFill /> Add
      </Button>
      <Button onClick={onHide} className="btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );


  const onChange = (data) => {
    const selectedImages = data;
    // Tạo một mảng chứa đối tượng 'originFileObj' của các tệp đã chọn
    const newImages = selectedImages.map((file) => file.originFileObj);
    // Cập nhật trạng thái 'image' bằng danh sách tệp mới
    setImages(newImages);
    // setFileList(data);
  }

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light dialogForm"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Add Product</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="addProductForm">
              <Row>
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="name">
                      <h6>Name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Input product name"
                      style={{ height: "50px" }}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="description">
                      <h6>Description</h6>
                    </label>
                    <TextArea
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Input description"
                      required
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="description">
                      <h6>Images</h6>
                    </label>
                    <ComUpImg onChange={onChange} />
                  </div>
                </Col>
                <Col md={6} >
                  <Row>
                    <Col md={6}>
                      <div className="form-group w-full">
                        <label className="label" htmlFor="congNgheManHinh">
                          <h6>Quantity</h6>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Input quantity"
                          style={{ height: "50px" }}
                          required
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group w-full">
                        <label className="label" htmlFor="congNgheManHinh">
                          <h6>Price</h6>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Input quantity"
                          style={{ height: "50px" }}
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div></Col>
                  </Row>

                  <Row >
                    <Col md={6}>
                      <div className="">
                        <label className="label">
                          <h6>Category</h6>
                        </label><br></br>
                        <select
                          className="form-control"
                          name="category"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          required
                          style={{ "height": "50px" }}
                        >
                          <option value="0">Select Category</option>
                          {category.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="">
                        <label className="label">
                          <h6>Pet Type</h6>
                        </label><br></br>
                        <select
                          className="form-control "
                          name="pettype"
                          onChange={(e) => setSelectedPettype(e.target.value)}
                          required
                          style={{ "height": "50px" }}
                        >
                          <option value="0">Select Pet Type</option>
                          <option value="Dog">Dog</option>
                          <option value="Cat">Cat</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddProducts;