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
                    Completed a comprehensive virtual internship in Embedded
                    Systems, gaining hands-on experience with microcontroller
                    programming, sensor integration, and real-time system
                    development. Developed practical skills in IoT applications
                    and embedded software design.
                  </p>
                  <ul className="internship-highlights">
                    <li>Microcontroller Programming (Arduino, Raspberry Pi)</li>
                    <li>Sensor Integration and Data Acquisition</li>
                    <li>Real-time Operating Systems (RTOS)</li>
                    <li>IoT Protocol Implementation</li>
                    <li>Embedded C/C++ Development</li>
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
