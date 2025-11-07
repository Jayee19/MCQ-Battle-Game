import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.css'; 

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      icon: 'bi-book',
      title: 'LEARN',
      color: '#00ff88',
      bgColor: 'rgba(0, 255, 136, 0.1)',
      items: [
        'Engage with interactive lessons',
        'Quizzes for enhanced learning',
        'Conceptual understanding'
      ],
      direction: 'fade-right'
    },
    {
      icon: 'bi-trophy',
      title: 'CHALLENGE',
      color: '#ff006e',
      bgColor: 'rgba(255, 0, 110, 0.1)',
      items: [
        'Invite friends for a game',
        'Free to join',
        'Quick 7-minute matches'
      ],
      direction: 'fade-up'
    },
    {
      icon: 'bi-award',
      title: 'WIN',
      color: '#4facfe',
      bgColor: 'rgba(79, 172, 254, 0.1)',
      items: [
        'Analyze your Progress',
        'Track position on leaderboard',
        'Compete with the best'
      ],
      direction: 'fade-left'
    }
  ];

  return (
    <Container fluid className="features-section">
      <Container>
        <div className="features-header">
          <h2 className="features-title">TIRED OF ROTE LEARNING?</h2>
          <p className="features-subtitle">With Battle, learn concepts from a wide range of games and quizzes</p>
        </div>
        
        <Row className="features-row">
          {features.map((feature, index) => (
            <Col md={4} key={index} data-aos={feature.direction} data-aos-duration="1200">
              <Card className="feature-card" style={{ borderTopColor: feature.color }}>
                <Card.Body>
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-container" style={{ backgroundColor: feature.bgColor, borderColor: feature.color }}>
                      <i className={`bi ${feature.icon}`} style={{ color: feature.color, fontSize: '3rem' }}></i>
                    </div>
                  </div>
                  
                  <Card.Title className="feature-card-title" style={{ color: feature.color }}>
                    {feature.title}
                  </Card.Title>
                  
                  <ul className="feature-card-text">
                    {feature.items.map((item, idx) => (
                      <li key={idx} style={{ borderLeftColor: feature.color }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default FeatureSection;
