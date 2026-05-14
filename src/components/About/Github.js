import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container } from "react-bootstrap";

function Github() {
  return (
    <Container className="github-activity-section">
      <h3>Contribution Activity</h3>
      <p>
        GitHub contributions showcase my consistent work on web applications and
        API development projects.
      </p>
      <GitHubCalendar
        username="himateja27"
        blockSize={18}
        blockMargin={6}
        color="#8f5dfe"
        fontSize={14}
      />
    </Container>
  );
}

export default Github;
