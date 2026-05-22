import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <Particle />
        <Container className="page-container hero-inner">
          <Row className="hero-grid align-items-center g-4 g-lg-5">
            <Col lg={5} md={12} className="hero-profile-col">
              <div className="hero-profile-card">
                <div className="profile-image-container">
                  <img
                    src={process.env.PUBLIC_URL + "/media/profile.jpg"}
                    alt="Hima Teja Vankayalapati"
                    className="profile-image"
                    onError={(e) => {
                      e.target.src =
                        process.env.PUBLIC_URL + "/media/profile.svg";
                    }}
                  />
                </div>
                <p className="hero-profile-name">Hima Teja Vankayalapati</p>
                <p className="hero-profile-role">Python Full Stack Developer</p>
                <span className="hero-status">Open to full-time opportunities</span>
              </div>
            </Col>

            <Col lg={7} md={12} className="hero-content-col">
              <span className="hero-badge">Portfolio · 2026</span>
              <h1 className="hero-title">
                Building scalable web apps with{" "}
                <span className="hero-title-accent">Django & React</span>
              </h1>
              <div className="dynamic-role">
                <TypeAnimation
                  sequence={[
                    "Python Full Stack Developer",
                    2200,
                    "Django REST API Engineer",
                    2200,
                    "React.js Frontend Developer",
                    2200,
                    "Backend & Database Specialist",
                    2200,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="typing-text"
                />
              </div>
              <p className="hero-lead">
                I design secure, production-ready systems using Django, DRF,
                React.js, and MySQL — from REST APIs and JWT authentication to
                responsive user interfaces teams can ship with confidence.
              </p>

              <div className="hero-cta-row">
                <Button variant="primary" href="/resume" className="hero-btn-primary">
                  Download Resume
                </Button>
                <Button
                  variant="outline-light"
                  href="/project"
                  className="hero-btn-secondary"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline-light"
                  href="/about"
                  className="hero-btn-secondary"
                >
                  About Me
                </Button>
              </div>

              <div className="hero-connect">
                <span className="hero-connect-label">Connect</span>
                <div className="hero-social-links">
                  <a
                    href="https://github.com/himateja27"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/himateja27/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a href="mailto:himatejahima032@gmail.com" aria-label="Email">
                    <FaEnvelope />
                  </a>
                  <a href="tel:+916302562033" aria-label="Phone">
                    <FaPhone />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Home2 />
    </>
  );
}

export default Home;
