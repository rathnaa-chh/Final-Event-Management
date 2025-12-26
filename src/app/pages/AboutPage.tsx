import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from 'event:asset/b2003fbeea12779afbd847f28cc5a516548c74a9.png';

export default function AboutPage() {
  const team = [
    { name: 'YaYa Kon Khmer', role: 'Founder & CEO', icon: '👩‍💼' },
    { name: 'Rathnaaa', role: 'Event Coordinator', icon: '🦸🏻‍♀️' },
    { name: 'Leakhena KPC', role: 'Design Director', icon: '👩‍🎨' },
    { name: 'Rithy PV', role: 'Operations Manager', icon: '👨‍💻' }
  ];

  return (
    <div className="min-vh-100 bg-light py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <img 
            src={logoImage} 
            alt="Kop Sarii Logo" 
            style={{ maxWidth: '300px', width: '100%', marginLeft:'500px' }}
            className="mb-4"
          />
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#FF4D6D' }}>
            About Kop Sarii
          </h1>
          <p className="lead text-muted">
            Creating unforgettable moments since 1997
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-0 shadow-sm mb-5">
          <Card.Body className="p-5">
            <h2 className="h3 fw-bold mb-4" style={{ color: '#FF4D6D' }}>
              Our Mission
            </h2>
            <p className="lead text-muted" style={{ color: '#FF4D6D' }}>
              At Kop Sarii, we guide you through every step of the event planning process, 
              assisting with everything from budget management to the overall design and flawless execution. 
              Our main goal is for clients to enjoy their celebration while we bring their vision to life 
              with creativity, professionalism, and attention to detail.
            </p>
          </Card.Body>
        </Card>

        {/* Values */}
        <Row className="mb-5 g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <Card.Body className="p-4">
                <div style={{ fontSize: '3rem' }} className="mb-3">💝</div>
                <h4 className="fw-bold mb-3" style={{ color: '#FF4D6D' }}>
                  Passion
                </h4>
                <p className="text-muted mb-0">
                  We are passionate about creating memorable experiences that exceed expectations.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <Card.Body className="p-4">
                <div style={{ fontSize: '3rem' }} className="mb-3">⭐</div>
                <h4 className="fw-bold mb-3" style={{ color: '#FF4D6D' }}>
                  Excellence
                </h4>
                <p className="text-muted mb-0">
                  We maintain the highest standards in every aspect of event planning and execution.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <Card.Body className="p-4">
                <div style={{ fontSize: '3rem' }} className="mb-3">🤝</div>
                <h4 className="fw-bold mb-3" style={{ color: '#FF4D6D' }}>
                  Partnership
                </h4>
                <p className="text-muted mb-0">
                  We work closely with you to understand and realize your unique vision.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team */}
        <div className="text-center mb-4">
          <h2 className="h3 fw-bold" style={{ color: '#FF4D6D' }}>
            Meet Our Team
          </h2>
        </div>
        <Row className="g-4 mb-5">
          {team.map((member, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Body className="p-4">
                  <div style={{ fontSize: '4rem' }} className="mb-3">
                    {member.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{member.name}</h5>
                  <p className="text-muted mb-0">{member.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats */}
        <Row className="g-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <h3 className="display-4 fw-bold" style={{ color: '#FF4D6D' }}>500+</h3>
                <p className="text-muted mb-0">Events Organized</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <h3 className="display-4 fw-bold" style={{ color: '#FF4D6D' }}>100%</h3>
                <p className="text-muted mb-0">Client Satisfaction</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <h3 className="display-4 fw-bold" style={{ color: '#FF4D6D' }}>4+</h3>
                <p className="text-muted mb-0">Years Experience</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <h3 className="display-4 fw-bold" style={{ color: '#FF4D6D' }}>50+</h3>
                <p className="text-muted mb-0">Team Members</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
