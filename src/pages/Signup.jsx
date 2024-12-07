import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '/workspaces/ReacWine/src/components/Signup.css';

export function Signup(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  document.title = "Sign up for an account";
  
  return (
    <Container className="signup-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit} className="signup-form">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="user@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="minimum 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-block">
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
