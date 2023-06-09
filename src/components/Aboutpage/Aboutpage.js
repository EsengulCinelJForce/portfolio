import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a Front End developer from Turkey. I build websites
              with a focus on providing the experience for everyone using them
              and responsiveness. Curious to learn more about developing
              scalable distribution systems, love problem solving, and care
              about writing and maintainable code. !
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>                  
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind/Emotion </li>
                </Col>
                <Col md={5}>
                  <li>React Js</li>
                  <li>Material-ui</li>
                  <li>Next Js</li>
                  <li>Github/BitBucket</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
