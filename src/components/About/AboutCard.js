import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumera Aafreen Y </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am currently pursuing B.Tech degree in Artificial Intelligence and data Science in <span className="purple"> Sri Krishna College of Engineering and Technology.</span>
            <br />
            I am a passionate and dedicated student with a strong interest in Machine Learning and Artificial Intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Organising Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sumera</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
