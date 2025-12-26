import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ServicesPage() {
  const services = [
    {
      icon: '🎂',
      title: 'Birthday Party',
      description: 'Creating unforgettable birthday celebrations with unique themes and decor.',
      features: [
        'Custom theme design',
        'Venue decoration',
        'Entertainment coordination',
        'Catering services'
      ]
    },
    {
      icon: '🎉',
      title: 'Private Party',
      description: 'Exclusive private gatherings tailored to your preferences and style.',
      features: [
        'Personalized planning',
        'Guest management',
        'Music and DJ services',
        'Photography and videography'
      ]
    },
    {
      icon: '🏡',
      title: 'Anniversary',
      description: 'Elegant anniversary planning from concept to completion with attention to detail.',
      features: [
        'Romantic ambiance creation',
        'Special moments coordination',
        'Floral arrangements',
        'Memory keepsakes'
      ]
    },
    {
      icon: '💼',
      title: 'Corporate Event',
      description: 'Professional corporate events that leave lasting impressions on your clients.',
      features: [
        'Conference planning',
        'Team building activities',
        'Brand integration',
        'Professional AV setup'
      ]
    }
  ];

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#FF4D6D' }}>
            Our Services
          </h1>
          <p className="lead text-muted">
            We offer comprehensive event planning services tailored to your needs
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ fontSize: '3rem' }} className="me-3">
                      {service.icon}
                    </div>
                    <h3 className="h4 mb-0 fw-bold" style={{ color: '#FF4D6D' }}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted mb-4">
                    {service.description}
                  </p>
                  <h5 className="h6 fw-bold mb-3">What We Include:</h5>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span style={{ color: '#FF4D6D' }}>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link 
            to="/contact" 
            className="btn btn-lg px-5 py-3 rounded-pill shadow"
            style={{ 
              backgroundColor: '#FF4D6D',
              border: 'none',
              color: 'white'
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
