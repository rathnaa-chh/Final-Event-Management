import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PagesPage() {
  const pages = [
    {
      title: 'Home',
      description: 'Main landing page with our services overview',
      link: '/',
      icon: '🏠'
    },
    {
      title: 'Services',
      description: 'Detailed information about all our event services',
      link: '/services',
      icon: '✨'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us for your event planning needs',
      link: '/contact',
      icon: '📧'
    },
    {
      title: 'Create Account',
      description: 'Sign up to start planning your perfect event',
      link: '/create-account',
      icon: '👤'
    }
  ];

  return (
    <div className="min-vh-100 bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#FF4D6D' }}>
            Site Pages
          </h1>
          <p className="lead text-muted">
            Explore all available pages on our website
          </p>
        </div>

        <Row className="g-4">
          {pages.map((page, index) => (
            <Col key={index} lg={6}>
              <Link to={page.link} className="text-decoration-none">
                <Card className="h-100 border-0 shadow-sm hover-card">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div style={{ fontSize: '3rem' }} className="me-3">
                        {page.icon}
                      </div>
                      <h3 className="h4 mb-0 fw-bold" style={{ color: '#FF4D6D' }}>
                        {page.title}
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      {page.description}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <div className="mt-5 p-4 bg-white rounded shadow-sm">
          <h3 className="h5 fw-bold mb-3" style={{ color: '#FF4D6D' }}>
            About Kop Sarii
          </h3>
          <p className="text-muted mb-0">
            Kop Sarii is your premier event planning partner, specializing in creating unforgettable 
            experiences for all types of celebrations. From intimate gatherings to grand corporate events, 
            we bring your vision to life with attention to detail and creative excellence.
          </p>
        </div>
      </Container>

      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  );
}
