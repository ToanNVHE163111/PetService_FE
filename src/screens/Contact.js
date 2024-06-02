import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      await postGoogle(formData);
      setFormData({ name: "", phone: "", email: "", content: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Gửi thông tin thành công");
    }
  };

  const postGoogle = async (data) => {
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSco2fO10FAqLtQ43kBn2dD_aaPj7ihbn3qn2usGm0T-ZYPR3g/formResponse";
    const formData = new FormData();
    formData.append("entry.2143736806", data.name);
    formData.append("entry.302580376", data.phone);
    formData.append("entry.731850584", data.email);
    formData.append("entry.2097721425", data.content);

    await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Thông tin liên hệ</h2>
        <Form.Group controlId="name">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Nội dung tư vấn</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nội dung tư vấn"
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">GỬI</Button>
      </Form>
    </Container>
  );
}
export default ContactForm;
