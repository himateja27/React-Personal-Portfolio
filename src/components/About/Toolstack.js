import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiGit />, label: "Git" },
    { icon: <SiGithub />, label: "GitHub" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <FaRobot />, label: "Copilot" },
    { icon: <SiNetlify />, label: "Netlify" },
    { icon: <SiRender />, label: "Render" },
  ];

  return (
    <Row className="tool-stack-row">
      {tools.map((tool, index) => (
        <Col xs={6} md={4} lg={2} key={index} className="tool-icon-card">
          <div className="tool-icon-inner">{tool.icon}</div>
          <div className="tech-icons-text">{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
