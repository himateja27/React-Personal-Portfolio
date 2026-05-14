import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an aspiring <span className="purple">Software Developer</span>{" "}
              who loves transforming ideas into{" "}
              <span className="purple">
                modern, interactive web applications
              </span>
              . Over time, I’ve explored several technologies and found my
              passion in building
              <span className="purple"> scalable backend APIs </span> and
              <span className="purple">
                {" "}
                visually impressive frontend experiences
              </span>
              .
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React, Python, MySQL, and Django{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full‑Stack Web Applications, Secure APIs, and Animated
                  Portfolio Sites{" "}
                </b>
              </i>
              with professional standards.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React </b> and backend frameworks like{" "}
              <i>
                <b className="purple">Django</b> and{" "}
                <b className="purple">Golang (Gin)</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
