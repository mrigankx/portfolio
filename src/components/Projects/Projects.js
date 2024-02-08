import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alan from "../../Assets/Projects/alan.png";
import expense from "../../Assets/Projects/expense.png";
import memories from "../../Assets/Projects/mermories.png";
import mes from "../../Assets/Projects/mes.png";
import vc from "../../Assets/Projects/vc.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Uses react concepts like State Management, Context API, Local Storage, Material UI. Data is stored in MongoDB & uses Express on the server-side. Speechly offers low latency, fully streaming spoken language understanding API to power voice-enabled multimodal interfaces."
              ghLink="https://github.com/mrigankx/tracksactions-client"
              demoLink="https://managexpense.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories Social Media"
              description="Using React, Node.js, Express & MongoDB I built this Full Stack MERN Application. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives."
              ghLink="https://github.com/mrigankx/memories-app"
              demoLink="https://memories-mrigankx.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alan}
              isBlog={false}
              title="Voice Controlled News Application"
              description="Alan AI is a revolutionary speech recognition software that allows adding voice capabilities to your applications. Visit the link and wait for few seconds until alan button appears at bottom-right corner."
              ghLink="https://github.com/mrigankx/news-reader-alan-ai"
              demoLink="https://news-reader-mrigankx.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mes}
              isBlog={false}
              title="Model English School Website"
              description="Built with MERN stack, this is a real life school website where visitors can apply for admissions and career options. This also has a dashboard, which can be used to manage the content of this website. This website is currently being used by Model English School, Pathsala."
              demoLink="https://mededucation-react-client.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vc}
              isBlog={false}
              title="Video Calling WebApp using WebRTC"
              description="This is a videocalling application where user can share their Calling Id with another user, & they can have a video call."
              ghLink="https://github.com/mrigankx/video-call-client"
              demoLink="https://callvid.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
