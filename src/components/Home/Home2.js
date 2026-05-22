import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const highlights = [
  {
    title: "Backend Systems",
    text: "Django, DRF, REST APIs, JWT auth, and MySQL database design.",
  },
  {
    title: "Frontend Experience",
    text: "Responsive React interfaces with clean UX and maintainable components.",
  },
  {
    title: "Production Mindset",
    text: "Agile delivery, debugging, security, and deployment-ready architecture.",
  },
];

function Home2() {
  return (
    <section className="home-about-wrapper">
      <Container className="page-container home-about-section" id="about">
        <div className="home-section-label">About Me</div>
        <Row className="g-4 align-items-start">
          <Col lg={7} md={12}>
            <h2 className="home-about-heading">
              Turning ideas into reliable full-stack products
            </h2>
            <p className="home-about-text">
              I am a Python Full Stack Developer focused on building scalable,
              secure applications with Django, Django REST Framework, and
              React.js. I enjoy owning features end to end — from database
              schema and API contracts to polished interfaces users trust.
            </p>
            <ul className="home-about-list">
              <li>API-first backend architecture with Django & DRF</li>
              <li>JWT authentication, RBAC, and secure data workflows</li>
              <li>React.js UIs optimized for performance and clarity</li>
              <li>MySQL modeling, query tuning, and production readiness</li>
            </ul>
          </Col>
          <Col lg={5} md={12}>
            <div className="home-highlights-grid">
              {highlights.map((item) => (
                <div className="home-highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;
