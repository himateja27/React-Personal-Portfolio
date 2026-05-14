import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {
  FaLinkedinIn,
  FaGithub,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar-premium ${navColour ? "sticky" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name-premium">
          <span className="brand-highlight">HIMA TEJA</span> VANKAYALAPATI
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          className="navbar-toggle-premium"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links-premium" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/internship"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <FaBriefcase /> Internship
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certifications"
                onClick={() => updateExpanded(false)}
                className="nav-link-premium"
              >
                <FaCertificate /> Certifications
              </Nav.Link>
            </Nav.Item>

            <div className="nav-socials">
              <Nav.Item className="nav-icon-link">
                <Button
                  variant="outline-light"
                  href="https://github.com/himateja27"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link-button-premium"
                >
                  <FaGithub />
                </Button>
              </Nav.Item>
              <Nav.Item className="nav-icon-link">
                <Button
                  variant="outline-light"
                  href="https://www.linkedin.com/in/himateja27/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link-button-premium"
                >
                  <FaLinkedinIn />
                </Button>
              </Nav.Item>
              <Nav.Item className="nav-icon-link theme-toggle">
                <Button
                  variant="outline-light"
                  onClick={() => setDarkMode(!darkMode)}
                  className="nav-link-button-premium"
                >
                  {darkMode ? <WiDaySunny /> : <WiMoonAltWaningCrescent4 />}
                </Button>
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
