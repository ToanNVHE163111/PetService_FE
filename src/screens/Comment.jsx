import React, { useEffect, useState } from "react";
import "../style/comment.css";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import {
  PencilFill,
  SendFill,
  ThreeDotsVertical,
  TrashFill,
} from "react-bootstrap-icons";
// import jwt from "jsonwebtoken";
import { InputText } from "primereact/inputtext";

const Comment = () => {
  const { id } = useParams();
  const [listComments, setListComments] = useState([]);
  const [text, setText] = useState("");
  const [editComment, setEditComment] = useState("");
  const username = localStorage.getItem("username");
  const fullname = localStorage.getItem("fullname");
  const userId = localStorage.getItem("userId");
  const [selectedComment, setSelectedComment] = useState(null);
  const [updateInput, setUpdateInput] = useState(false);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    // Chuyển đổi thành định dạng "dd/mm/yyyy"
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return formattedDate;
  };

  useEffect(() => {
    axios
      .get("http://localhost:9999/comments/" + id)
      .then((res) => {
        const sortedComments = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setListComments(sortedComments);
        console.log(sortedComments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDeleteComment = (e, index) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete" + index + "?")) {
      axios
        .delete("http://localhost:9999/comments/" + index)
        .then(() => {
          toast.success("Comment deleted successfully");
          setListComments(listComments.filter((t) => t._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/comments", {
        text: text,
        userId: userId,
        // petId: id,
        // toyId: id,
        // foodId: id,
        // medicineId: id,
        productId: id,
      })
      .then((response) => {
        if (response.status === 201) {
          const newCommentId = response.data.addComment._id; 
          const userId = response.data.addComment.userId; 
          const time = response.data.addComment.createdAt; 
          console.log(userId);
          console.log(newCommentId);
          setListComments([
            { _id:newCommentId, userId: {fullname: fullname }, text: text,createdAt: time },
            ...listComments, 
          ]);
          toast.success("Comment created successfully");
          setText("");
          console.log(response.data);
        } else {
          console.log("Comment thất bại");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  const handleUpdateComment = (index) => {
    axios
      .put("http://localhost:9999/comments/" + index, {
        text: editComment,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Edit comment successfully");
          axios
            .get("http://localhost:9999/comments/" + id)
            .then((res) => {
              const sortCmt = res.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              );
              setListComments(sortCmt);
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          toast.error("Edit comment failed");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    setEditComment("");
    setSelectedComment(null);
    setUpdateInput(false);
  };
  const handleEditCmt = (index, currentText) => {
    setEditComment(currentText);
    setSelectedComment(index);
    setUpdateInput(true);
  };
  const handleSelectComment = (index) => {
    setSelectedCommentIndex(index === selectedCommentIndex ? null : index);
  };

  const isCurrentUserComment = (commentUserId) => {
    return commentUserId === fullname;
  };

  return (
    <Container class="card">
      <span class="title">Comments</span>
      {username && (
        <div
          style={{
            border: "solid #CCC 1px",
            margin: "20px",
            boxShadow: "5px 10px 10px 5px #C0C0C0",
            height: "85px",
            borderRadius: "20px",
          }}
        >
          <Col>
            <Form className="d-flex align-items-center mt-4">
              <Image
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                roundedCircle
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <Form.Group controlId="commentInput" className="flex-grow-1 mr-2">
                <Form.Control
                  type="text"
                  placeholder="Write a comment..."
                  value={text}
                  rows={2}
                  cols={30}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
              <div>
                {username && (
                  <Button
                    type="submit"
                    style={{ backgroundColor: "#D3D3D3", border: "none" }}
                    onClick={handleCreate}
                  >
                    <SendFill style={{ fontSize: "20px", color: "#696969" }} />
                  </Button>
                )}
              </div>
            </Form>
          </Col>
        </div>
      )}
      {listComments.map((c, index) => (
        <div class="comments" key={index}>
          <div class="comment-react">
            <button>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#707277"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#707277"
                  d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                ></path>
              </svg>
            </button>

            <hr />
            <span>14</span>
          </div>

          <div class="comment-container">
            <div class="user">
              <div class="user-pic">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linejoin="round"
                    fill="#707277"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#707277"
                    d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                  ></path>
                  <path
                    stroke-width="2"
                    fill="#707277"
                    stroke="#707277"
                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                  ></path>
                </svg>
              </div>
              <div class="user-info">
                <p style={{ fontSize: "15px", color:'black' }}>{c.userId.fullname}</p>
                <small
                  style={{
                    display: "block",
                    marginTop: "-20px",
                    marginLeft: "10px",
                    color: "gray",
                    fontSize: "10px",
                  }}
                >
                  {formatDate(c.createdAt)}
                </small>
              </div>
            </div>
            <div className="d-flex">
              <div class="comment-content" style={{ marginLeft: "60px" }}>
                {updateInput && selectedComment === index ? (
                  <Row className="input-button-container">
                    <Col md={10} sm={10} xs={10}>
                      <InputText
                        className="text-muted"
                        style={{
                          fontSize: "15px",
                          width: "500px",
                          border: "none",
                          height: "40px",
                        }}
                        value={editComment}
                        rows={2}
                        cols={30}
                        onChange={(e) => setEditComment(e.target.value)}
                      ></InputText>
                    </Col>
                    <Col md={2} sm={2} xs={2}>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => handleUpdateComment(c._id)}
                        style={{
                          backgroundColor: "#EEEEEE",
                          border: "none",
                          marginBottom: "7px",
                        }}
                      >
                        <SendFill
                          style={{ fontSize: "20px", color: "#0099FF" }}
                        />
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <div
                    className="bg-light"
                    style={{ width: "auto", height: "30px", paddingLeft: "10px", paddingRight: "10px", borderRadius:'10px' }}
                  >
                    <p
                      className="comment-text p-2 "
                      style={{ fontSize: "15px", color:'black' }}
                    >
                      {c.text}
                    </p>
                  </div>
                )}
              </div>
              <div style={{ marginLeft: "300px" }}>
                {isCurrentUserComment(c.userId.fullname) && (
                  <>
                    <Button
                      style={{ border: "none", backgroundColor: "#FFFF" }}
                      onClick={() => handleSelectComment(index)}
                    >
                      <ThreeDotsVertical style={{ color: "#777777" }} />
                    </Button>
                  </>
                )}
                {isCurrentUserComment(c.userId.fullname ) &&
                  selectedCommentIndex === index && (
                    <>
                      <Button
                        style={{
                          border: "none",
                          backgroundColor: "#FFFF",
                          marginLeft: "10px",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteComment(e, c._id);
                        }}
                      >
                        <TrashFill
                          style={{ color: "#FF0000", fontSize: "20px" }}
                        />
                      </Button>
                      <Button
                        style={{
                          border: "none",
                          backgroundColor: "#FFFF",
                          marginLeft: "10px",
                        }}
                        onClick={() => handleEditCmt(index, c.text)}
                      >
                        <PencilFill
                          style={{ color: "#0066FF", fontSize: "20px" }}
                        />
                      </Button>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Comment;
