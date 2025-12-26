import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { RootState } from '../store/store';
import { logout } from '../store/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoSmall from 'figma:asset/b063a2137823e7d247c5c1156f43ecc1ec9ca689.png';

export default function Navigation() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="fw-bold" style={{ color: '#FF4D6D', fontSize: '1.5rem' }}>
            Kop Sarii
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/pages" className="mx-2">
              Pages
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contacts
            </Nav.Link>
            
            {isAuthenticated ? (
              <>
                <span className="mx-3 text-muted">Welcome, {user?.name}</span>
                <Button
                  onClick={handleLogout}
                  variant="outline-danger"
                  className="rounded-pill px-4"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/create-account">
                <Button
                  className="rounded-pill px-4 ms-2"
                  style={{
                    backgroundColor: '#FF4D6D',
                    border: 'none'
                  }}
                >
                  Consult Now
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}