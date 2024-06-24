import React, { useState } from "react";
import {
  EmojiWinkFill,
  FileEarmarkImage,
  GeoAltFill,
  SendArrowUpFill,
  TagFill,
  ThreeDots,
  XCircle,
} from "react-bootstrap-icons";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import "../style/addBlog.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBlog = (props) => {
  const { visible, setVisible } = props;
  const [content, setContent] = useState('');
  const [images, setImages] = useState(['']);
  const fullname = localStorage.getItem("fullname");
  const nav = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleAddBlog = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/blogs", {
        content: content,
        userId: userId,
        images: images,
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Add Blog Success");
          nav("/blog");
          setVisible(false);
        } else {
          toast.error("Add blog faild");
        }
      });
  };

  const onHide = () => {
    setVisible(false);
  };

  const addImageInput = () => {
    setImages([...images, '']);
  };

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const removeImageInput = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const dialogFooter = (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      <Button className="btn btn-success mr-2" form="addBlog" type="submit">
        <SendArrowUpFill /> Đăng bài
      </Button>
    </div>
  );
  return (
    <div className="create-post">
      <Dialog
        visible={visible}
        onHide={onHide}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Thêm bài viết</div>}
      >
        <div className="header">
          <img
            src="https://www.localbotswana.com/img/bw/d/1641218846_95961.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <div className="user-info">
            <span className="user-name">{fullname}</span>
          </div>
        </div>
        <select className="privacy">
          <option value="public">Công khai</option>
        </select>
        <form id="addBlog" onSubmit={handleAddBlog}>
          <div className="textarea-container">
            <textarea
              placeholder="Bạn đang nghĩ gì thế?"
              className="post-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="image-inputs">
              {images.map((image, index) => (
                <div key={index} className="image-input-container">
                  <input
                    type="text"
                    placeholder="Nhập link ảnh"
                    className="image-input"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                  />
                  {index > 0 && (
                    <button type="button" className="close-button" onClick={() => removeImageInput(index)}>
                      <XCircle size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="actions">
            <div className="icon-group">
              <button type="button" className="add-button">
                Thêm vào bài viết của bạn
              </button>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Thêm ảnh</Tooltip>}
              >
                <button type="button" className="icon-button" onClick={addImageInput}>
                  <FileEarmarkImage size={22} />
                </button>
              </OverlayTrigger>
              <button type="button" className="icon-button">
                <TagFill size={22} />
              </button>
              <button type="button" className="icon-button">
                <EmojiWinkFill size={22} />
              </button>
              <button type="button" className="icon-button">
                <GeoAltFill size={22} />
              </button>
              <button type="button" className="icon-button">
                <ThreeDots size={22} />
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddBlog;
