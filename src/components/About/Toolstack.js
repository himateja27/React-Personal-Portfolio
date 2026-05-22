import React from "react";
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
    <div className="skills-grid tools-grid">
      {tools.map((tool) => (
        <div className="skill-card tool-card" key={tool.label}>
          <div className="tool-icon-inner">{tool.icon}</div>
          <span className="skill-label">{tool.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
