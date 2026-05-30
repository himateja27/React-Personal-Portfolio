import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";

function FreelanceProjectCard({
  title,
  category,
  description,
  features,
  technologies,
  githubLink,
  liveDemo,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="project-card-view freelance-card">
        <div className="freelance-badge">Freelance Work</div>
        <Card.Body>
          <Card.Title className="project-title">{title}</Card.Title>
          <Card.Subtitle className="project-category mb-2">
            {category}
          </Card.Subtitle>
          <Card.Text className="project-description">{description}</Card.Text>
          <ul className="project-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="technologies-section">
            <h6 className="tech-label">Technologies:</h6>
            <div className="tech-badges">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="project-actions">
            {githubLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  href={githubLink}
                  target="_blank"
                  className="project-action-button"
                >
                  <BsGithub /> GitHub
                </Button>
              </motion.div>
            )}
            {liveDemo && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline-light"
                  href={liveDemo}
                  target="_blank"
                  className="project-action-button"
                >
                  <CgWebsite /> Live Demo
                </Button>
              </motion.div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default FreelanceProjectCard;
