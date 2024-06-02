import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import '../screens/Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    try {
      await postGoogle(formData);
      setFormData({ name: '', phone: '', email: '', content: '' });
      toast.success('Gửi thành công');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Có lỗi xảy ra, vui lòng thử lại.');
    }
  };

  const postGoogle = async (data) => {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSco2fO10FAqLtQ43kBn2dD_aaPj7ihbn3qn2usGm0T-ZYPR3g/formResponse";
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
    <div className="container123">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2 className='theh2'>Thông tin liên hệ</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Họ và tên"
                value={formData.name}
                onChange={handleChange}
                className="field"
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control
                type="tel"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                className="field"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="field"
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Nội dung tư vấn"
                value={formData.content}
                onChange={handleChange}
                className="field"
              />
            </Form.Group>
            <Button type="submit" className="btn">GỬI</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
