import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              <p>
                I'm a <span className="purple">B.Tech</span> student specializing in
                <span className="purple"> Artificial Intelligence</span> and
                <span className="purple"> Data Science</span>, with a stellar academic record
                (<span className="purple">CGPA: 9.58</span>). My passion lies at the intersection of
                technology and problem-solving—transforming complex data into intelligent
                solutions that drive real-world impact.
              </p>

              <p style={{ marginBottom: 8 }}>
                As a <span className="purple">Full-Stack Developer</span> and
                <span className="purple"> ML Engineer</span>, I excel in:
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Building scalable backend systems with
                  <span className="purple"> SpringBoot</span>,
                  <span className="purple"> Flask</span>, and
                  <span className="purple"> Node.js</span>
                </li>
                <li className="about-activity">
                  <ImPointRight /> Developing predictive models using
                  <span className="purple"> TensorFlow</span>,
                  <span className="purple"> PyTorch</span>, and
                  <span className="purple"> Scikit-learn</span>
                </li>
                <li className="about-activity">
                  <ImPointRight /> Creating responsive web applications with
                  <span className="purple"> React.js</span> and modern CSS
                </li>
                <li className="about-activity">
                  <ImPointRight /> Deploying solutions on
                  <span className="purple"> AWS</span>,
                  <span className="purple"> GCP</span>, and
                  <span className="purple"> Kubernetes</span>
                </li>
              </ul>

              <p>
                My projects span impactful domains—from AI-driven agriculture tools to real-time
                environmental monitoring systems. I thrive in collaborative environments, having
                participated in <span className="purple">5+ hackathons</span> and contributed to
                <span className="purple"> open-source</span> projects.
              </p>

              <p>
                Beyond code, I'm an avid learner currently exploring
                <span className="purple"> LLMs</span>,
                <span className="purple"> Computer Vision</span>, and
                <span className="purple"> Blockchain</span>. When not debugging, you'll find me
                hiking trails, reading sci-fi, or mentoring aspiring developers.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sumerayesdhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumera-aafreen-y-7ab7792a0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sumera_yesdhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
