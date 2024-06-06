import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import {
  HandThumbsUp,
  Chat,
  CameraReels,
  Images,
  EmojiLaughing,
  Send,
} from "react-bootstrap-icons";
import "../style/blog.css";
import Zoom from "react-medium-image-zoom";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children || "..."}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  (
    {
      children,
      style,
      className,
      "aria-labelledby": labeledBy,
      onEdit,
      onDelete,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          <li>
            <button
              className="dropdown-item dropdown-item-edit"
              onClick={onEdit}
            >
              Edit
            </button>
          </li>
          <li>
            <button
              className="dropdown-item dropdown-item-delete"
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
);

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleDeleteBlog = (id) => {
    if (window.confirm(`Do you want to delete the blog - ID: ${id}?`)) {
      axios
        .delete(`http://localhost:9999/blogs/${id}`)
        .then(() => {
          alert("Delete successfully!");
          setBlogs(blogs.filter((blog) => blog._id !== id));
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  const handleEditBlog = (id) => {
    // Implement edit blog logic here
    alert(`Edit blog - ID: ${id}`);
  };
  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row class="row">
        <Col md={12}>
          <div class="cardd">
            <div class="card-header fc-card-header">
              <h4>Bài Viết</h4>
            </div>
            <Row class="row" style={{ marginTop: "20px" }}>
              <Col md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/393724372_1041589230373346_6667114565953423430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tt-1yO8u2wUQ7kNvgEgX-aQ&_nc_ht=scontent.fhan5-2.fna&oh=00_AYBjv6tvMmNGoEYNsK-nSoBf_PhK-4LW98I5LhjtMFFREw&oe=6663304A"
                  class="rounded-circle"
                  style={{ width: "44px", marginTop: "10px" }}
                />
              </Col>
              <Col md={8} sm={8} xs={8}>
                <textarea
                  style={{ borderRadius: "40px", paddingRight: "20px" }}
                  class="form-control"
                  placeholder="Bạn đang nghĩ gì thế ???"
                ></textarea>
              </Col>
              <Col md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
                <button class="rounded-circle" style={{ border: "none" }}>
                  {" "}
                  <Send style={{ fontSize: "25px", marginTop: "10px" }} />{" "}
                </button>
              </Col>
            </Row>
            <hr />

            <Row style={{ marginLeft: "0px", cursor: "pointer" }}>
              <Col md={4} sm={4} xs={4} className="text-center">
                <button class="fc-btn fc-btn-rounded">
                  <label>
                    <CameraReels
                      style={{
                        fontSize: "25px",
                        marginRight: "10px",
                        color: "red",
                      }}
                    />
                    Phát trực tiếp
                  </label>
                </button>
              </Col>
              <Col md={4} sm={4} xs={4} className="text-center">
                <button
                  class="fc-btn fc-btn-rounded"
                  style={{ cursor: "pointer" }}
                >
                  <label>
                    <Images style={{ fontSize: "25px", marginRight: "10px" }} />
                    Ảnh/Video
                  </label>
                </button>
              </Col>
              <Col md={4} sm={4} xs={4} className="text-center">
                <button
                  class="fc-btn fc-btn-rounded"
                  style={{ cursor: "pointer" }}
                >
                  <label>
                    <EmojiLaughing
                      style={{ fontSize: "25px", marginRight: "10px" }}
                    />
                    Cảm xúc
                  </label>
                </button>
              </Col>
            </Row>
            <br />
          </div>
        </Col>
      </Row>
      <br />
      {blogs.map((b) => (
        <Row key={b._id}>
          <Col md={12}>
            <div className="cardd">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <img
                    src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/393724372_1041589230373346_6667114565953423430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tt-1yO8u2wUQ7kNvgEgX-aQ&_nc_ht=scontent.fhan5-2.fna&oh=00_AYBjv6tvMmNGoEYNsK-nSoBf_PhK-4LW98I5LhjtMFFREw&oe=6663304A"
                    className="rounded-circle"
                    style={{ width: "40px", marginRight: "4px" }}
                  />
                  <b>{b.userId?.fullname}</b>
                  <Dropdown style={{ marginLeft: "800px" }}>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    >
                      {/* Button content */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      as={CustomMenu}
                      onEdit={() => handleEditBlog(b._id)}
                      onDelete={() => handleDeleteBlog(b._id)}
                    />
                  </Dropdown>
                </div>
                <small
                  style={{
                    display: "block",
                    marginTop: "-10px",
                    marginLeft: "55px",
                    color: "gray",
                  }}
                >
                  {formatDate(b.createdAt)}
                </small>

                <p>{b.content}</p>
                <Row>
                  {b.images &&
                    b.images.map((imgSrc, index) => (
                      <Col md={6} sm={4} xs={4}>
                        <Zoom key={index}>
                          <img
                            src={imgSrc}
                            style={{ width: "100%", height: "350px" }}
                          />
                        </Zoom>
                      </Col>
                    ))}
                </Row>
                <br />
                <hr />
                <Row>
                  <Col md={12}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ marginLeft: "24px" }}>
                        1 like 13 Comment
                      </span>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row style={{ marginLeft: "0px", display: "flex" }}>
                  <Col md={6} sm={6} xs={6}>
                    <button className="fc-btn fc-btn-white">
                      <div className="fc-icon">
                        <label style={{ cursor: "pointer" }}>
                          <HandThumbsUp
                            style={{ fontSize: "25px", marginRight: "10px" }}
                          />
                          Thích
                        </label>
                      </div>
                    </button>
                  </Col>
                  <Col md={6} sm={6} xs={6}>
                    <button className="fc-btn fc-btn-white">
                      <div className="fc-icon fc-icon-comentar">
                        <label style={{ cursor: "pointer" }}>
                          <Chat
                            style={{ fontSize: "25px", marginRight: "10px" }}
                          />
                          Bình luận
                        </label>
                      </div>
                    </button>
                  </Col>
                </Row>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Blog;
