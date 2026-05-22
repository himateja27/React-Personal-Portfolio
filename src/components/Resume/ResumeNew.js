import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const resumeFileName = "Hima_Teja_Vankayalapati_Resume.pdf";
  const resumeUrl =
    process.env.PUBLIC_URL + "/media/himateja-fullstack-dev.pdf";

  const handleDownload = () => {
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = resumeFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Download error:", error);
        window.open(resumeUrl, "_blank");
      });
  };

  return (
    <section className="resume-page">
      <Particle />
      <Container className="page-container">
        <div className="section-header">
          <h2 className="section-heading">Resume</h2>
          <p className="section-text">
            A summary of my Python Full Stack development experience,
            certifications, and project accomplishments.
          </p>
        </div>

        <div className="resume-actions">
          <Button
            variant="primary"
            onClick={handleDownload}
            className="download-btn"
          >
            <AiOutlineDownload /> Download Resume
          </Button>
          <Button
            variant="outline-light"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            Open in New Tab
          </Button>
        </div>

        <div className="resume-preview">
          <iframe
            src={resumeUrl}
            title="Hima Teja Vankayalapati Resume"
            className="resume-iframe"
          />
        </div>

        <Row className="resume-keypoints g-4">
          <Col md={4} className="resume-card">
            <h4>Backend</h4>
            <ul>
              <li>Django & Django REST Framework</li>
              <li>RESTful API design</li>
              <li>JWT & token authentication</li>
            </ul>
          </Col>
          <Col md={4} className="resume-card">
            <h4>Frontend</h4>
            <ul>
              <li>React.js and component design</li>
              <li>Responsive UI & accessibility</li>
              <li>State management and performance</li>
            </ul>
          </Col>
          <Col md={4} className="resume-card">
            <h4>Projects</h4>
            <ul>
              <li>Bus Ticket Booking System</li>
              <li>FactoryIQ Manufacturing ERP</li>
              <li>LangChain Document Q&A Bot</li>
              <li>Personal Portfolio Website</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;
