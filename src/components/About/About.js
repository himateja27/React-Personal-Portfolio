import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:himatejahima032@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="about-page">
      <Particle />
      <Container className="page-container">
        <Row className="about-top-row g-4">
          <Col lg={7} md={12} className="about-intro">
            <h2 className="section-heading">Professional Summary</h2>
            <p className="section-text">
              I am a Python Full Stack Developer with proven experience
              implementing Django and Django REST Framework applications for
              scalable enterprises. I build backend architecture, secure REST
              APIs, JWT authentication, and React-based frontend interfaces that
              support production-ready systems.
            </p>
            <ul className="about-highlights">
              <li>
                Backend architecture and REST API development with Django.
              </li>
              <li>
                JWT authentication, RBAC, token security and API authorization.
              </li>
              <li>
                React.js frontend development for responsive user experiences.
              </li>
              <li>
                MySQL schema design, optimization and scalable data workflows.
              </li>
              <li>
                Agile development, debugging, SDLC practices and deployment
                readiness.
              </li>
            </ul>
          </Col>
          <Col lg={5} md={12} className="about-card-column">
            <Aboutcard />
          </Col>
        </Row>

        <Row className="skills-section">
          <Col md={12}>
            <h2 className="section-heading">Core Skills</h2>
          </Col>
          <Col md={12}>
            <Techstack />
          </Col>
          <Col md={12}>
            <h2 className="section-heading">Tools</h2>
            <Toolstack />
          </Col>
        </Row>

        <Row className="career-section g-4">
          <Col lg={6} md={12}>
            <div className="detail-panel">
              <h3>Embedded Systems Virtual Internship</h3>
              <span className="detail-duration">
                EduSkills | Jan 2025 – Mar 2025
              </span>
              <ul>
                <li>
                  Developed Python solutions for debugging and optimization
                  tasks.
                </li>
                <li>
                  Built production-ready workflows and followed Agile
                  methodologies.
                </li>
                <li>
                  Worked on SDLC best practices, code reviews and system
                  testing.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="detail-panel">
              <h3>Certifications</h3>
              <ul>
                <li>
                  Python Full Stack Development – Vcube Software Solutions
                </li>
                <li>Python & MySQL Training – Besant Technologies</li>
                <li>Python Programming Certification – Infosys Springboard</li>
                <li>MySQL Certification – Infosys Springboard</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="github-section">
          <Col md={12}>
            <h2 className="section-heading">GitHub Profile</h2>
            <p className="section-text">
              Explore my GitHub repositories and contribution activity for
              Python, Django REST Framework, React.js and MySQL projects.
            </p>
            <Github />
          </Col>
        </Row>

        <Row className="contact-section g-4" id="contact">
          <Col lg={5} md={12} className="contact-panel">
            <h2 className="section-heading">Contact</h2>
            <p className="section-text">
              Reach out by email or phone for Python Full Stack roles,
              backend systems, API development, or portfolio project work.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <h4>Email</h4>
                <a href="mailto:himatejahima032@gmail.com">
                  himatejahima032@gmail.com
                </a>
              </div>
              <div className="contact-card">
                <h4>Phone</h4>
                <a href="tel:+916302562033">+91 6302562033</a>
              </div>
              <div className="contact-card">
                <h4>GitHub</h4>
                <a
                  href="https://github.com/himateja27"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/himateja27
                </a>
              </div>
              <div className="contact-card">
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/himateja27/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/himateja27
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} md={12} className="contact-form-column">
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief project or job details"
                  rows={5}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                className="contact-submit"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
