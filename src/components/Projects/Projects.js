import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erkalapai from "../../Assets/Projects/erkalapai.png";
import sql from "../../Assets/Projects/sql.png";
import apple from "../../Assets/Projects/apple.png";
import skysense from "../../Assets/Projects/skysense.png";
import blindstick from "../../Assets/Projects/blindstick.png";
import nofoodwaste from "../../Assets/Projects/nofoodwaste.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "var(--text-color)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erkalapai}
              isBlog={false}
              title="Erkalapai"
              description="A modern chat application built with React.js and Node.js, featuring real-time messaging, AI-powered responses using OpenAI API, user authentication, and responsive design. Includes features like message encryption, file sharing, and intelligent conversation suggestions."
              ghLink="https://github.com/Sanjay-M1512/Erkalapai"
              demoLink="https://erkalapai.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skysense}
              isBlog={false}
              title="SkySense"
              description="SkySense helps you track live weather updates, analyze risks, and visualize data with ease. Stay informed and make smarter decisions with real-time insights."
              ghLink="https://github.com/Atimanyu/sky-sense"
              demoLink="https://s-k-y-s-e-n-s-e.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL Database Management System"
              description="A comprehensive database management system built with SQL, featuring advanced query optimization, data modeling, and real-time analytics. Includes features like automated backup systems, user authentication, role-based access control, and interactive dashboards for data visualization and reporting."
              ghLink="https://github.com/Sanjay-M1512/NL-SQL"
              demoLink="https://nl-sql-sanjay-m1512s-projects.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nofoodwaste}
              isBlog={false}
              title="Food Donation Hub"
              description="A comprehensive food donation platform that connects donors with those in need, featuring both donor and admin dashboards with unified authentication."
              ghLink="https://github.com/hyderabad25/Team-38"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blindstick}
              isBlog={false}
              title="Smart Blind Stick"
              description="An innovative IoT-based smart blind stick designed to assist visually impaired individuals. Features include obstacle detection using ultrasonic sensors, GPS navigation, emergency alerts, and smartphone connectivity. Built with Arduino, Python, and mobile app integration for enhanced accessibility and safety."
              ghLink="https://github.com/sumerayesdhan/smart-blind-stick"
              demoLink="https://smart-blind-stick-demo.vercel.app/"
            />
          </Col>
         
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Plant Disease Detection AI"
              description="An intelligent plant disease detection system built with PyTorch and CNN architecture. Trained on Kaggle's plant disease dataset with 38 classes, achieving 98% accuracy using ResNet34 transfer learning. Features include real-time image classification, disease identification for 14 unique plant species, and a user-friendly web interface for farmers and gardeners."
              
            />
          </Col> 
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
