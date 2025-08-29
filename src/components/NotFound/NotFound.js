import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container fluid className="project-section" style={{ textAlign: "center" }}>
      <h1 className="project-heading">404 - <strong className="purple">Page Not Found</strong></h1>
      <p style={{ color: "var(--text-color)", marginBottom: 24 }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button as={Link} to="/" variant="primary">Back to Home</Button>
    </Container>
  );
}

export default NotFound;
