import React from "react";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Django from "../../Assets/TechIcons/django1.jpeg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import HTML from "../../Assets/TechIcons/html.png";
import MYSQL from "../../Assets/TechIcons/mysql.jpeg";
import Git from "../../Assets/TechIcons/Git.svg";
import CSS from "../../Assets/TechIcons/css.png";
import RESTAPIS from "../../Assets/TechIcons/restapis.webp";

const skills = [
  { src: Python, alt: "Python", label: "Python" },
  { src: Django, alt: "Django", label: "Django" },
  { src: RESTAPIS, alt: "DRF", label: "Django REST Framework" },
  { src: ReactIcon, alt: "React", label: "React.js" },
  { src: Javascript, alt: "JavaScript", label: "JavaScript" },
  { src: HTML, alt: "HTML5", label: "HTML5" },
  { src: CSS, alt: "CSS3", label: "CSS3" },
  { src: MYSQL, alt: "MySQL", label: "MySQL" },
  { src: Git, alt: "Git", label: "Git" },
  { src: Postman, alt: "Postman", label: "Postman" },
];

function Techstack() {
  return (
    <div className="skills-grid tech-grid">
      {skills.map((skill) => (
        <div className="skill-card tech-card" key={skill.label}>
          <img src={skill.src} alt={skill.alt} />
          <span className="skill-label">{skill.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
