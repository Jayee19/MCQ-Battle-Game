import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container fluid className="footer-container">
        <Container>
          <Row className="footer-content">
            <Col md={4} className="footer-section">
              <h5 className="footer-title">About MCQ Battle</h5>
              <p className="footer-text">
                An engaging quiz platform where learning meets competition. Challenge yourself and compete with friends in exciting MCQ battles!
              </p>
            </Col>
            <Col md={4} className="footer-section">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={4} className="footer-section">
              <h5 className="footer-title">Connect With Us</h5>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/jayee-das-64653822a/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Jayee19" target="_blank" rel="noopener noreferrer" className="social-icon github" title="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="mailto:jayeedas1131@gmail.com" className="social-icon email" title="Email">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </Col>
          </Row>

          <div className="footer-divider"></div>

          <Row className="developer-credits">
            <Col md={12} className="text-center">
              <div className="developer-info">
                <p className="developer-text">
                  🚀 <strong>Developed By:</strong> <span className="developer-name">Jayee Das</span>
                </p>
                <div className="developer-links">
                  <a href="https://www.linkedin.com/in/jayee-das-64653822a/" target="_blank" rel="noopener noreferrer" className="developer-link">
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                  <span className="separator">•</span>
                  <a href="https://github.com/Jayee19" target="_blank" rel="noopener noreferrer" className="developer-link">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <span className="separator">•</span>
                  <a href="mailto:jayeedas1131@gmail.com" className="developer-link">
                    <i className="bi bi-envelope"></i> Email
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="footer-bottom">
            <Col md={6} className="text-center-mobile">
              <p className="copyright">
                © 2024 MCQ Battle Game. All rights reserved. | Made with ❤️ by Jayee Das
              </p>
            </Col>
            <Col md={6} className="text-right text-center-mobile">
              <button className="btn btn-gradient" id="back-to-top">
                <i className="bi bi-arrow-up"></i> Back to Top
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
