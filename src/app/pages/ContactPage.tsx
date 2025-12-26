import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#FF4D6D' }}>
                Contact Us
              </h1>
              <p className="lead text-muted">
                Let's start planning your perfect event
              </p>
            </div>

            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-5">
                {submitted && (
                  <div className="alert alert-success mb-4" role="alert">
                    Thank you for contacting us! We'll get back to you soon.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Event Type</Form.Label>
                    <Form.Select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="py-3"
                    >
                      <option value="">Select event type</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="private">Private Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="corporate">Corporate Event</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event..."
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 py-3 rounded-pill shadow"
                    style={{
                      backgroundColor: '#FF4D6D',
                      border: 'none'
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            <Row className="g-4">
              <Col md={4}>
                <Card className="border-0 shadow-sm text-center h-100">
                  <Card.Body className="p-4">
                    <div style={{ fontSize: '2rem' }}>📧</div>
                    <h5 className="mt-3 fw-bold">Email</h5>
                    <p className="text-muted mb-0">kopsarii@ite.com</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="border-0 shadow-sm text-center h-100">
                  <Card.Body className="p-4">
                    <div style={{ fontSize: '2rem' }}>📞</div>
                    <h5 className="mt-3 fw-bold">Phone Number</h5>
                    <p className="text-muted mb-0">(+855) 96 404 404</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="border-0 shadow-sm text-center h-100">
                  <Card.Body className="p-4">
                    <div style={{ fontSize: '2rem' }}>📍</div>
                    <h5 className="mt-3 fw-bold">Location</h5>
                    <p className="text-muted mb-0">Planet Earth</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
