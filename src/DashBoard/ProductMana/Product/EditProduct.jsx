import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PlusSquareFill, X } from "react-bootstrap-icons";
import { Col, FormSelect, Row } from "react-bootstrap";
import '../../../style/addproduct.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";
import ComUpImg from "../../../ComeUpImage/ComUpImg";


const EditProduct = (props) => {
  const { editVisible, setEditVisible, data, productId } = props;

  const [editProducts, setEditProducts] = useState({})
  const [image, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPettype, setSelectedPettype] = useState(null);
  const [category, setCategory] = useState([])


  const nav = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:9999/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error('Error fetching toys:', error);
      });
  }, []);
console.log(image);
  useEffect(() => {
    axios.get('http://localhost:9999/products/' + productId)
      .then((res) => {
        setEditProducts(res.data);
        if (res.data.image && res.data.image.length > 0) {
          setImages(res.data.image);
        }

      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [productId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const newImageUrls = image.map((file) => file.url);

    axios
      .put("http://localhost:9999/products/" + productId, {
        name:editProducts.name,
        image:newImageUrls,
        quantity:editProducts.quantity,
        description:editProducts.description,
        pettype:selectedPettype,
        category:selectedCategory,  
        price:editProducts.price
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Edit profile successfully");
          setEditVisible(false);
        } else {
          console.log("Edit profile failed");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    nav("/dashboard");
  };
  const onHide = () => {
    setEditVisible(false);
  };

  const dialogFooter = (
    <div style={{ margin: "20px", textAlign: 'end' }}>
      <Button
        className=" btn btn-success mr-2"
        type="button"
        form="editProductForm"
        onClick={handleUpdate}
      >
        <PlusSquareFill /> Save
      </Button>
      <Button onClick={onHide} className=" btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );


const onChange = (data) => {
  // Cập nhật trạng thái 'image' bằng danh sách các đối tượng tệp mới
  setImages(data);
  onChangeEditProducts(data);
};

const onChangeEditProducts = (data) => {
  // Tạo một mảng chứa URL của các hình ảnh từ fileList
  const newImageUrls = data.map((file) => file.url);
  // Cập nhật trạng thái 'editProducts' với danh sách URL hình ảnh mới
  setEditProducts({
    ...editProducts,
    image: newImageUrls
  });
};
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={editVisible}
        onHide={() => setEditVisible(false)}
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
                      value={editProducts.name}
                      onChange={(e) => setEditProducts({
                        ...editProducts,
                        name: e.target.value,
                      })}
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
                      value={editProducts.description}
                      onChange={(e) => setEditProducts({
                        ...editProducts,
                        description: e.target.value,
                      })}
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="description">
                      <h6>Images</h6>
                    </label>
                    <ComUpImg onChange={onChange} existingImages={image} />
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
                          value={editProducts.quantity}
                          onChange={(e) => setEditProducts({
                            ...editProducts,
                            quantity: e.target.value,
                          })}
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
                          value={editProducts.price}
                          onChange={(e) => setEditProducts({
                            ...editProducts,
                            price: e.target.value,
                          })}
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
                          value={editProducts.category?._id}
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
                          value={editProducts.pettype}
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

export default EditProduct;
