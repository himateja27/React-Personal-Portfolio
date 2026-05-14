import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const resumeUrl =
    process.env.PUBLIC_URL + "/media/himateja-fullstack-dev.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Hima_Teja_Vankayalapati_Resume.pdf";
    link.click();
  };

  const onDocumentLoadSuccess = () => {
    setPdfError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF loading error:", error);
    setPdfError(true);
  };

  return (
    <section className="resume-page">
      <Particle />
      <Container>
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
        </div>

        <div className="resume-preview">
          {pdfError ? (
            <div className="pdf-error-message">
              <p>
                Resume preview is not available. Please download the PDF to
                view.
              </p>
              <Button
                variant="primary"
                onClick={handleDownload}
                className="download-btn"
              >
                <AiOutlineDownload /> Download Resume PDF
              </Button>
            </div>
          ) : (
            <Document
              file={resumeUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.7} />
            </Document>
          )}
        </div>

        <div className="resume-keypoints">
          <Row>
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
        </div>
      </Container>
    </section>
  );
}

export default ResumeNew;
