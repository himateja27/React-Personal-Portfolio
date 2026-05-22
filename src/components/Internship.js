import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

function Internship() {
  return (
    <Container fluid className="internship-section">
      <Container>
        <Row>
          <Col>
            <div className="internship-content">
              <h2 className="section-title">Internship Experience</h2>
              <div className="internship-card">
                <div className="internship-header">
                  <h3>Embedded Systems Virtual Internship</h3>
                  <div className="internship-meta">
                    <span className="internship-company">EduSkills</span>
                    <span className="internship-duration">
                      <FaCalendarAlt /> Jan 2025 – Mar 2025
                    </span>
                  </div>
                </div>
                <div className="internship-description">
                  <p>
                    Completed a virtual internship in Embedded Systems with focus on Python programming concepts. Gained hands-on experience applying Python to solve real-world technical problems in embedded environments.
                  </p>
                  <ul className="internship-highlights">
                    <li>Applied Python programming concepts to solve real-world technical problems in embedded environments</li>
                    <li>Performed debugging, optimization, and error analysis to improve overall code performance</li>
                    <li>Gained exposure to Software Development Life Cycle (SDLC) and Agile methodologies in a team setting</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Internship;
