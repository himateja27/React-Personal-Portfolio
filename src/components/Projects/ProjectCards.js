import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({
  title,
  description,
  features,
  frontendLink,
  backendLink,
  repoLink,
  liveLink,
}) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-description">{description}</Card.Text>
        <ul className="project-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="project-actions">
          {repoLink && (
            <Button
              variant="primary"
              href={repoLink}
              target="_blank"
              className="project-action-button"
            >
              <BsGithub /> GitHub
            </Button>
          )}
          {frontendLink && (
            <Button
              variant="primary"
              href={frontendLink}
              target="_blank"
              className="project-action-button"
            >
              <BsGithub /> Frontend GitHub
            </Button>
          )}
          {backendLink && (
            <Button
              variant="outline-light"
              href={backendLink}
              target="_blank"
              className="project-action-button"
            >
              <BsGithub /> Backend GitHub
            </Button>
          )}
          {liveLink && (
            <Button
              variant="outline-light"
              href={liveLink}
              target="_blank"
              className="project-action-button"
            >
              <CgWebsite /> Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
