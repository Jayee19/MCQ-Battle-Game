import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import MCQLogo from '../Logo/MCQLogo';

import 'aos/dist/aos.css';
import AOS from 'aos';

import { useAuth } from '../Context/AuthContext';


const CustomNavbar = () => {
  const navigate = useNavigate(); 
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} className="d-flex align-items-center" style={{ cursor: 'pointer', gap: '10px' }}>
          <MCQLogo size={45} />
          <span className="navbar-brand-text">MCQ Battle</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto nav-links">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/')}>Features</Nav.Link>
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="primary" className="login-button">
                LogOut
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} className="login-button">
                LogIn
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
