import React from "react";
import { Col, Row } from "react-bootstrap";
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

function Techstack() {
  return (
    <Row className="tech-stack-row">
      <Col xs={6} md={3} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Django} alt="Django" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={RESTAPIS} alt="DRF" />
        <div className="tech-icons-text">Django REST Framework</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={HTML} alt="HTML5" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={CSS} alt="CSS3" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={MYSQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
