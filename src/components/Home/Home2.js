import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col lg={8} md={12} className="home-about-description">
            <h2 className="section-heading">About Me</h2>
            <p className="section-text">
              I am a Python Full Stack Developer with experience building scalable, secure and maintainable web applications using Django, Django REST Framework and React.js. I deliver production-ready backend services, REST APIs, JWT authentication and user-centric frontend experiences.
            </p>
            <div className="feature-list">
              <p>My core strengths include:</p>
              <ul>
                <li>Designing backend architecture and API-first systems.</li>
                <li>Implementing secure JWT authentication and role-based access control.</li>
                <li>Building responsive React user interfaces with strong UX.</li>
                <li>Optimizing MySQL databases and application performance.</li>
                <li>Working with Agile teams to ship production-ready systems.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
