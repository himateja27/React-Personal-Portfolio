import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FreelanceProjectCard from "./FreelanceProjectCard";
import Particle from "../Particle";
import { motion } from "framer-motion";

const freelanceProjects = [
  {
    title: "Crown Home Spaces — Luxury Interiors & Construction",
    category: "Freelance Client Project",
    description:
      "Developed a premium business website for an interiors and construction company using React and modern frontend technologies. Built a luxury-themed user experience with responsive design, smooth animations, SEO optimization, and production-ready deployment.",
    features: [
      "Luxury-themed UI with premium design",
      "Fully responsive across devices",
      "Team & Leadership showcase",
      "Framer Motion and GSAP animations",
      "SEO optimization",
      "Fast loading performance",
      "Modern React architecture",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Router DOM",
      "Swiper.js",
    ],
    githubLink: "https://github.com/himateja27/Construction",
    liveDemo: "https://crown-home-spaces.netlify.app/",
  },
  {
    title: "Fighters Combat Academy",
    category: "Freelance Client Project",
    description:
      "Designed and developed a modern martial arts and fitness academy website with engaging UI, responsive layouts, animations, and optimized deployment. Built using React and modern frontend technologies for a professional online presence.",
    features: [
      "Modern academy website design",
      "Mobile-friendly responsive layout",
      "Smooth animations and transitions",
      "Component-based architecture",
      "Optimized build and deployment",
      "Fast performance",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Swiper.js",
    ],
    githubLink: "https://github.com/himateja27/GYM",
    liveDemo: "https://fighter-combat-academy.netlify.app/",
  },
];

function FreelanceProjects() {
  return (
    <section className="project-section" id="freelance-projects">
      <Particle />
      <Container className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-heading">Freelance Client Projects</h2>
          <p className="section-text">
            Professional websites and business solutions delivered for real
            clients as a freelance developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="freelance-experience-section"
        >
          <h3 className="experience-heading">Freelance Experience</h3>
          <p className="experience-description">
            Successfully delivered business websites for real-world clients,
            focusing on responsive design, user experience, performance
            optimization, and modern React development practices.
          </p>
          <ul className="experience-highlights">
            <li>Worked directly with clients</li>
            <li>Delivered production-ready websites</li>
            <li>Implemented responsive and modern UI/UX</li>
            <li>Deployed applications on Netlify</li>
            <li>Maintained clean and scalable code architecture</li>
          </ul>
        </motion.div>

        <Row className="project-card-row g-4">
          {freelanceProjects.map((project, index) => (
            <Col
              key={project.title}
              lg={6}
              md={12}
              className="project-card-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <FreelanceProjectCard {...project} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FreelanceProjects;
