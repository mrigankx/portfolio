import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Transforming ideas into intuitive interfaces through{" "}
              <b className="purple">React</b> &{" "}
              <b className="purple">React Native</b> wizardry.
              <br />
              <br />I am fluent in langages like
              <i>
                <b className="purple"> Javascript, Python and Swift. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new pixel-perfect UIs with
              &nbsp;
              <i>
                <b className="purple">Web/Mobile Development Technologies.</b>
              </i>
              <br />
              <br />
              Through my development experiences, I can balance the need of
              users and businesses to understand their pain points and how I can
              contribute as a Developer and solve their problems.
            </p>
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
                  href="https://github.com/mrigankx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mrigankx/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/winter_soldier501"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <h5>Email: mrigankgoswami03@gmail.com | Call: 9476718296</h5>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
