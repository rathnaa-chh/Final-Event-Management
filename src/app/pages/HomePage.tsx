import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from 'event:asset/b2003fbeea12779afbd847f28cc5a516548c74a9.png';

export default function HomePage() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section 
        className="py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #FFB6C6 0%, #FFA8BE 0%, #FF9AB4 100%)'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold text-dark mb-4">
                Organization of Events
              </h1>
              <p className="lead text-dark mb-4">
                We guide through the process, assisting with everything from the budget to the overall 
                event design and execution. Our main goal is for clients to enjoy their engagement and 
                lean on our team to bring their vision to life.
              </p>
              <Link 
                to="/create-account" 
                className="btn btn-lg px-5 py-3 rounded-pill shadow"
                style={{ 
                  backgroundColor: '#FF4D6D',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.1rem'
                }}
              >
                What We Offer
              </Link>
            </div>
            <div className="col-lg-6">
              <div 
                className="p-5 rounded-4 shadow-lg text-center" 
                style={{ 
                  background: 'linear-gradient(135deg, #FFC8D9 0%, #FFB6CF 100%)'
                }}
              >
                <div className="mb-4">
                  <img 
                    src={logoImage} 
                    alt="Kop Sarii Logo" 
                    style={{ maxWidth: '300px', width: '100%' , marginLeft:'100px'}}
                  />
                </div>
                <h2 className="h3 fw-bold" style={{ color: '#FF4D6D' }}>
                  Kop Sarii Events
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-50 bg-light min-vh-500">
        <div className="container">
          <div className="row g-4">
            {/* Birthday Party */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🎂</div>
                  <h5 className="card-title fw-bold" style={{ color: '#FF4D6D' }}>
                    Birthday Party
                  </h5>
                  <p className="card-text text-muted">
                    Creating unforgettable birthday celebrations with unique themes and decor.
                  </p>
                </div>
              </div>
            </div>

            {/* Private Party */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🎉</div>
                  <h5 className="card-title fw-bold" style={{ color: '#FF4D6D' }}>
                    Private Party
                  </h5>
                  <p className="card-text text-muted">
                    Exclusive private gatherings tailored to your preferences and style.
                  </p>
                </div>
              </div>
            </div>

            {/* Anniversary */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🏡</div>
                  <h5 className="card-title fw-bold" style={{ color: '#FF4D6D' }}>
                    Anniversary
                  </h5>
                  <p className="card-text text-muted">
                    Elegant anniversary planning from concept to completion with attention to detail.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Event */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>💼</div>
                  <h5 className="card-title fw-bold" style={{ color: '#FF4D6D' }}>
                    Corporate Event
                  </h5>
                  <p className="card-text text-muted">
                    Professional corporate events that leave lasting impressions on your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
