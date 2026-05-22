import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section id="home" className="hero-section">
      <Particle />
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={6} md={12} className="hero-copy">
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
            <h1>HIMA TEJA</h1>
            <div className="dynamic-role">
              <TypeAnimation
                sequence={[
                  "Python Full Stack Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Django Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "REST API Developer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "Python Developer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </div>
            <p className="hero-description">
              I build production-ready web applications with Django, Django REST
              Framework, React.js, MySQL and secure JWT-based authentication. My
              work is focused on scalable backend architecture, REST API
              development and polished frontend experiences.
            </p>
            <div className="hero-actions">
              <Button variant="primary" href="/resume" className="hero-button">
                Download Resume
              </Button>
              <Button
                variant="outline-light"
                href="/project"
                className="hero-button"
              >
                View Projects
              </Button>
              <Button
                variant="outline-light"
                href="mailto:himatejahima032@gmail.com"
                className="hero-button"
              >
                Email Me
              </Button>
              <Button
                variant="outline-light"
                href="tel:+916302562033"
                className="hero-button"
              >
                Call Me
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/himateja27"
                target="_blank"
                rel="noreferrer"
                className="hero-button"
              >
                GitHub
              </Button>
              <Button
                variant="outline-light"
                href="https://www.linkedin.com/in/himateja27/"
                target="_blank"
                rel="noreferrer"
                className="hero-button"
              >
                LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
