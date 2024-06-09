

import axios from "axios";
import { Dialog } from "primereact/dialog";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { PlusSquareFill, X, XCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditBlog = (props) => {
    const { editVisible, setEditVisible, data, onUpdate } = props;
    const [content, setContent] = useState(data?.content || '');
    const [images, setImages] = useState(data?.images || []);

    useEffect(() => {
        if (data) {
            setContent(data.content || '');
            setImages(data.images || []);
        }
    }, [data]);

    const handleEditBlog = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:9999/blogs/${data._id}`, {
                content: content,
                images: images
            })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Chỉnh sửa blog thành công");
                    onUpdate(data._id, { content, images });
                    setEditVisible(false);
                } else {
                    toast.error("Chỉnh sửa blog thất bại");
                }
            })
            .catch((error) => {
                toast.error("Chỉnh sửa blog thất bại: " + error.message);
            });
    };

    const onHide = () => {
        setEditVisible(false);
    };

    const handleAddExtraImage = () => {
        setImages([...images, '']);
    };

    const handleRemoveExtraImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const dialogFooter = (
        <div style={{ margin: "20px", textAlign: 'end' }}>
            <Button
                className="btn btn-success mr-2"
                type="submit"
                form="editProductForm"
                onClick={handleEditBlog}
            >
                <PlusSquareFill /> Save
            </Button>
            <Button onClick={onHide} className="btn btn-danger" style={{ marginRight: " 40px" }}>
                <X style={{ fontSize: "22px" }} />
                Close
            </Button>
        </div>
    );

    return (
        <Container>
            <Dialog
                visible={editVisible}
                onHide={onHide}
                footer={dialogFooter}
                className="bg-light"
                style={{ width: "70vw" }}
                modal
                header={<div className="custom-dialog-header">Edit <span className="highlight-text">Blog</span></div>}
            >
                <Row>
                    <Col md={12} className="p-4">
                        <Form>
                            <Form.Group controlId="content" style={{ marginBottom: "20px", marginLeft: " 30px", marginRight: "20px" }}>
                                <Form.Label style={{ fontWeight: "bold" }}>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    style={{ width: "97.5%" }}
                                />
                            </Form.Group>

                            <Form.Label style={{ fontWeight: "bold", marginLeft: "30px" }}>Image</Form.Label>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {images.map((image, index) => (
                                    <Form.Group controlId={`image-${index}`} key={`image-${index}`} style={{ marginBottom: "20px", display: "flex", alignItems: "center", marginLeft: "30px", marginRight: "20px" }}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter image URL"
                                            value={image}
                                            onChange={(e) => {
                                                const updatedImages = [...images];
                                                updatedImages[index] = e.target.value;
                                                setImages(updatedImages);
                                            }}
                                            style={{ marginRight: "10px" }}
                                            className="input-container" // Thêm lớp CSS cho ô input text
                                        />
                                        <XCircleFill className="text-danger" style={{ cursor: "pointer" }} onClick={() => handleRemoveExtraImage(index)} />
                                    </Form.Group>
                                ))}
                            </div>






                            <div style={{ margin: "20px", textAlign: 'start' }}>
                                <Button className="btn btn-primary mr-2 add-image-button" onClick={handleAddExtraImage} style={{ marginLeft: "10px" }}>
                                    <PlusSquareFill /> Image
                                </Button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Dialog>
        </Container>
    );
};

export default EditBlog;

