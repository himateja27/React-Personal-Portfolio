import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="about-profile-card">
      <Card.Body>
        <Card.Title>HIMA TEJA VANKAYALAPATI</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          Python Full Stack Developer
        </Card.Subtitle>
        <Card.Text>
          I design and deliver scalable Django applications, REST APIs with DRF,
          JWT authentication and responsive React.js interfaces backed by MySQL.
          I focus on production-ready systems, secure architecture, and strong
          Agile execution.
        </Card.Text>
        <ul className="about-highlights-card">
          <li>Full-stack web applications with Django, DRF and React.</li>
          <li>Secure API design, JWT authorization and RBAC.</li>
          <li>MySQL optimization, database design and query performance.</li>
          <li>Agile workflows, debugging and production readiness.</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
