import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    title: "Bus Ticket Booking System",
    description:
      "A comprehensive bus booking platform with secure authentication, role-based access control, booking workflows, and seat allocation management.",
    features: [
      "Secure JWT authentication and role-based access control",
      "Booking workflows with real-time seat allocation",
      "REST API integration with Django REST Framework",
      "MySQL database optimization for schedules and reservations",
    ],
    frontendLink:
      "https://github.com/himateja27/React-Frontend-BusTicketBooking-System",
    backendLink:
      "https://github.com/himateja27/Django-Backend-BusTicketBooking-System",
  },
  {
    title: "FactoryIQ – Manufacturing ERP System",
    description:
      "A multi-role manufacturing ERP platform with inventory management, production tracking, real-time dashboards, and secure JWT authentication.",
    features: [
      "Multi-role ERP system with production and inventory modules",
      "JWT authentication and secure token-based access",
      "Real-time dashboards and RESTful APIs",
      "Email notifications for key production events",
    ],
    repoLink:
      "https://github.com/himateja27/FactoryIQ-Manufacturing-Management-Portal-System",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with React.js, showcasing professional projects, skills, and experience in Python Full Stack development.",
    features: [
      "Responsive React.js frontend with modern UI/UX",
      "Professional project showcases and skill highlights",
      "Contact forms and social media integration",
      "Optimized for performance and SEO",
    ],
    repoLink: "https://github.com/himateja27/React-Personal-Portfolio",
  },
  {
    title: "LangChain Document Q&A Bot",
    description:
      "An end-to-end Document Q&A system using RAG that allows users to ask questions about documents and receive accurate answers with source citations.",
    features: [
      "Multi-format document support: PDF, TXT, DOCX",
      "Intelligent text chunking with configurable overlap",
      "Advanced embeddings using OpenAI and HuggingFace models",
      "Vector databases: FAISS or ChromaDB with persistent storage",
      "Smart retrieval with similarity search and citations",
      "Django web interface and CLI for interaction",
    ],
    repoLink: "https://github.com/himateja27/langchain",
  },
  {
    title: "Voting/Poll Application",
    description:
      "A modern polling application with Django REST Framework backend and React frontend for creating polls, voting, and live results.",
    features: [
      "Create polls with 2-4 options and live result updates",
      "Vote tracking with client-side duplicate prevention",
      "Animated percentage bars and responsive Tailwind UI",
      "Django REST API with MySQL and CORS support",
    ],
    repoLink: "https://github.com/himateja27/Voting-PollApp",
  },
];

function Projects() {
  return (
    <section className="project-section" id="projects">
      <Particle />
      <Container className="page-container">
        <div className="section-header">
          <h2 className="section-heading">Selected Projects</h2>
          <p className="section-text">
            Professional applications built with Django REST Framework,
            React.js, MySQL, JWT authentication, and modern web technologies.
          </p>
        </div>

        <Row className="project-card-row g-4">
          {projects.map((project) => (
            <Col key={project.title} lg={6} md={12} className="project-card-col">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
