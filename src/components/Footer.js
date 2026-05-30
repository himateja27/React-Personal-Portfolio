import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/project", label: "Projects" },
    { to: "/freelance", label: "Freelance" },
    { to: "/resume", label: "Resume" },
    { to: "/internship", label: "Internship" },
    { to: "/certifications", label: "Certifications" },
  ];

  return (
    <footer className="site-footer">
      <Container className="page-container footer-inner">
        <Row className="footer-main g-4">
          <Col lg={4} md={6}>
            <div className="footer-brand-block">
              <h4>HIMA TEJA VANKAYALAPATI</h4>
              <p className="footer-tagline">Python Full Stack Developer</p>
              <p className="footer-bio">
                Django · DRF · React.js · MySQL — building secure, scalable web
                applications for real-world products.
              </p>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="footer-heading">Navigate</h5>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-contact">
              <li>
                <a href="mailto:himatejahima032@gmail.com">
                  himatejahima032@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916302562033">+91 6302562033</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-heading">Social</h5>
            <div className="footer-social-icons">
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
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© {year} HIMA TEJA VANKAYALAPATI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
