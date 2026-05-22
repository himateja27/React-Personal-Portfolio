import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaCalendarAlt } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Python Full Stack Development",
      issuer: "Vcube",
      date: "2025",
      description:
        "Comprehensive training in full-stack Python development including Django, Flask, and modern web technologies.",
    },
    {
      title: "Python & MySQL",
      issuer: "Besant Technologies",
      date: "2025",
      description:
        "Advanced database integration with Python, covering SQL queries, database design, and ORM frameworks.",
    },
    {
      title: "Python Programming",
      issuer: "Infosys",
      date: "2024",
      description:
        "Professional Python programming certification focusing on best practices, algorithms, and software development.",
    },
    {
      title: "MySQL",
      issuer: "Infosys",
      date: "2024",
      description:
        "Database management and SQL expertise certification covering advanced MySQL concepts and optimization.",
    },
  ];

  return (
    <Container fluid className="certifications-section">
      <Container className="page-container">
        <Row>
          <Col>
            <div className="certifications-content">
              <h2 className="section-title">Certifications</h2>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-card">
                    <div className="certification-icon">
                      <FaCertificate />
                    </div>
                    <div className="certification-details">
                      <h3>{cert.title}</h3>
                      <div className="certification-meta">
                        <span className="certification-issuer">
                          {cert.issuer}
                        </span>
                        <span className="certification-date">
                          <FaCalendarAlt /> {cert.date}
                        </span>
                      </div>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
