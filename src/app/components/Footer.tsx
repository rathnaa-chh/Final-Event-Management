import 'bootstrap/dist/css/bootstrap.min.css';
import footerImage1 from 'evevnt:asset/2a1e0a459d067eb38618f9fcdf6b7778a6aac888.png';
import footerImage2 from 'event:asset/8c1e8b5946dc50ebd213c950a051b48c1fbf2e97.png';
import logoImage from 'event:asset/b2003fbeea12779afbd847f28cc5a516548c74a9.png';

export default function Footer() {
  return (
    <footer 
      className="py-5" 
      style={{ 
        backgroundColor: '#FFB6C6',
        color: 'white'
      }}
    >
      <div className="container">
        <div className="row align-items-start">
          {/* Middle Content */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h2 className="h2 fw-bold mb-4" style={{ color: 'white' }}>
              Heyyy!! Let's make your day unforgettable!
            </h2>
            
            <div className="mb-3">
              <p className="mb-2" style={{ color: '#5865F2' }}>
                <strong>Facebook</strong>
              </p>
              <p className="mb-2" style={{ color: '#5865F2' }}>
                <strong>Instagram</strong>
              </p>
              <p className="mb-2" style={{ color: '#5865F2' }}>
                <strong>Discord</strong>
              </p>
            </div>

            <div className="mt-4">
              <p className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                kopsarii@ite.com
              </p>
              <p className="mb-3">
                <i className="bi bi-telephone-fill me-2"></i>
                (+855) 96 404 404
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-4 text-lg-end">
            <img 
              src={footerImage2} 
              alt="Event Table Setup" 
              className="img-fluid rounded-3 shadow"
              style={{ width: '600px', height: '250px', objectFit: 'cover', marginLeft: '400px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
