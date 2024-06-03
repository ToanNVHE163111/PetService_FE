import React from "react";
import "../style/blog.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  CameraReels,
  Chat,
  EmojiLaughing,
  HandThumbsUp,
  Images,
  Send,
} from "react-bootstrap-icons";
const Blog = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row class="row">
        <Col md={12}>
          <div class="cardd">
            <div class="card-header fc-card-header"><h4>Bài Viết</h4></div>
            <Row class="row" style={{marginTop:'20px'}}>
              <Col md={2} sm={2} xs={2}  style={{ textAlign: "center" }}>
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/393724372_1041589230373346_6667114565953423430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tt-1yO8u2wUQ7kNvgEgX-aQ&_nc_ht=scontent.fhan5-2.fna&oh=00_AYBjv6tvMmNGoEYNsK-nSoBf_PhK-4LW98I5LhjtMFFREw&oe=6663304A"
                  class="rounded-circle"
                  style={{ width: "44px", marginTop: "10px" }}
                />
              </Col>
              <Col md={8} sm={8} xs={8}  >
                <textarea
                  style={{ borderRadius: "40px", paddingRight:'20px' }}
                  class="form-control"
                  placeholder="Thắng ơiiiii, bạn đang nghĩ gì thế  ???"
                ></textarea>
              </Col>
              <Col md={2} sm={2} xs={2}  style={{ textAlign: "center" }}>
                <button class="rounded-circle" style={{border:'none'}}> <Send style={{ fontSize: "25px",marginTop:'10px'}}/>  </button>
              </Col>
            </Row>
            <hr />

            <Row style={{ marginLeft: "0px" }}>
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
                <button class="fc-btn fc-btn-rounded">
                  <label>
                    <Images style={{ fontSize: "25px", marginRight: "10px" }} />
                    Ảnh/Video
                  </label>
                </button>
              </Col>
              <Col md={4} sm={4} xs={4} className="text-center">
                <button class="fc-btn fc-btn-rounded">
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
      <Row>
        <Col md={12}>
          <div class="cardd">
            <div class="card-body">
              <div style={{ fontSize: "14px", color: "gray" }}>
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/393724372_1041589230373346_6667114565953423430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tt-1yO8u2wUQ7kNvgEgX-aQ&_nc_ht=scontent.fhan5-2.fna&oh=00_AYBjv6tvMmNGoEYNsK-nSoBf_PhK-4LW98I5LhjtMFFREw&oe=6663304A"
                  class="rounded-circle"
                  style={{ width: "40px", marginRight: "4px" }}
                />
                <b>Nguyễn Văn Thắng</b>
                <br />
                <small style={{ marginLeft: "45px" }}>12 giờ trước</small>
              </div>
              <br />

              <p>Anh Nguyễn Văn Thắng là .....</p>
            </div>
            <Row>
              <Col md={4} sm={4} xs={4}>
                <img
                  src="https://www.petitjourney.com.au/wp-content/uploads/2018/03/15215150836038506.jpg"
                  style={{ width: "70%" }}
                />
              </Col>
              <Col md={4} sm={4} xs={4}>
                <img
                  src="https://cdn11.bigcommerce.com/s-zllqv0a9td/images/stencil/385x215/uploaded_images/adobestock-164033225-min.jpeg?t=1711619492"
                  style={{ width: "70%" }}
                />
              </Col>
              <Col md={4} sm={4} xs={4}>
                <img
                  src="https://petkeen.com/wp-content/uploads/2022/03/group-of-pets-on-white-background_Ermolaev-Alexander_Shutterstock.jpg"
                  style={{ width: "70%" }}
                />
              </Col>
            </Row>

            <br />

            <hr />
            <Row>
              <Col md={12}>
                <div style={{ textAlign: "left" }}>
                  <span style={{ marginLeft: "24px" }}>1 like 13 Comment</span>
                </div>
              </Col>
            </Row>
            <hr />
            <Row style={{ marginLeft: "0px", display: "flex" }}>
              <Col md={6} sm={6} xs={6}>
                <button class="fc-btn fc-btn-white">
                  <div class="fc-icon">
                    <label style={{ cursor: "pointer" }}>
                      <HandThumbsUp
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      Like
                    </label>
                  </div>
                </button>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <button class="fc-btn fc-btn-white">
                  <div class="fc-icon fc-icon-comentar">
                    <label style={{ cursor: "pointer" }}>
                      <Chat style={{ fontSize: "25px", marginRight: "10px" }} />
                      Coments
                    </label>
                  </div>
                </button>
              </Col>
            </Row>
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
