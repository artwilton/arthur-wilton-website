import React, { useState, useEffect } from 'react';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import homeScreenVideoMain from "../../../src/assets/home/home_screen_video_main.mp4";
import homeScreenVideoAbout from "../../../src/assets/home/home_screen_video_about.mp4";
import preview from "../../../src/assets/home/home_screen_video_main.jpg";


function HomeSectionMain(props) {
  const [backgroundVideo, setBackgroundVideo] = useState(homeScreenVideoMain);

  // const backgroundVideoRef = useRef();
  // const previousUrl = useRef(url);

  return (
    <section id="Section-01">
      <div className="videoOverlay"></div>

      <video key={backgroundVideo} id="homeScreenVideo" poster={preview} autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Container fluid className="d-flex flex-column h-100">
        <div className="my-auto align-self-center text-center">
          <h1 className="display-1">ARTHUR WILTON</h1>
          <br />
          <p className="lead">software development | post production</p>
          <br />
          <Row className="justify-content-center">
            <Col sm="auto">
              <Button variant="outline-light" size="lg" block>
                my work
              </Button>
            </Col>
            <Col sm="auto">
              <Button variant="outline-light" size="lg" block onMouseEnter={() => setBackgroundVideo(homeScreenVideoAbout)}
                onMouseLeave={() => setBackgroundVideo(homeScreenVideoMain)}>
                about
              </Button>
            </Col>
            <Col sm="auto">
              <Button variant="outline-light" size="lg" block>
                blog
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <div class="container"></div>
    </section>
  );
}

export default HomeSectionMain;
