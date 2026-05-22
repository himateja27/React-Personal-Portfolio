import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

  const resumeFileName = "Hima_Teja_Vankayalapati_Resume.pdf";
  const resumeUrl =
    process.env.PUBLIC_URL + "/media/himateja-fullstack-dev.pdf";

  const updatePageWidth = useCallback(() => {
    const containerPadding = 48;
    const maxWidth = 900;
    setPageWidth(
      Math.min(window.innerWidth - containerPadding, maxWidth)
    );
  }, []);

  useEffect(() => {
    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);
    return () => window.removeEventListener("resize", updatePageWidth);
  }, [updatePageWidth]);

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

  const onDocumentLoadSuccess = ({ numPages: total }) => {
    setNumPages(total);
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
            className="download-btn ms-2"
          >
            Open in New Tab
          </Button>
        </div>

        <div className="resume-preview">
          <Document
            file={resumeUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="resume-loading">Loading resume...</p>}
            error={
              <div className="pdf-error-message">
                <p>Unable to preview the resume here.</p>
                <Button variant="primary" onClick={handleDownload}>
                  <AiOutlineDownload /> Download Resume PDF
                </Button>
              </div>
            }
            className="resume-document"
          >
            {numPages &&
              Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                  className="resume-pdf-page"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
          </Document>
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
