import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col md={4} className="footer-brand">
          <h4>HIMA TEJA VANKAYALAPATI</h4>
          <p>Python Full Stack Developer</p>
        </Col>
        <Col md={4} className="footer-copywright">
          <p>© {year} HIMA TEJA VANKAYALAPATI</p>
        </Col>
        <Col md={4} className="footer-social">
          <a href="mailto:himatejahima032@gmail.com">
            himatejahima032@gmail.com
          </a>
          <div className="footer-icons">
            <a
              href="https://github.com/himateja27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/himateja27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
