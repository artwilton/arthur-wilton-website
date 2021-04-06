import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import homeScreenVideoMain from "../../assets/home/main_section/home_screen_video_main.mp4";
import homeScreenVideoAbout from "../../assets/home/main_section/home_screen_video_about.mp4";
import preview from "../../assets/home/main_section/home_screen_video_main.jpg";

function HomeSectionMain(props) {
  const [backgroundVideo, setBackgroundVideo] = useState(homeScreenVideoMain);
  const history = useHistory();

  const blogUrl = "https://artwilton.medium.com/";

  function handleClick(path) {
    history.push(path);
  }

  return (
    <section id="Section01">
      <div className="videoOverlay"></div>

      <video
        key={backgroundVideo}
        id="homeScreenVideo"
        poster={preview}
        autoPlay
        muted
        loop
      >
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
              <Link
                className="btn btn-outline-light btn-lg"
                role="button"
                block
                to="/work"
              >
                work
              </Link>
            </Col>
            <Col sm="auto">
              <Link
                className="btn btn-outline-light btn-lg"
                role="button"
                block
                to="/about"
                onMouseEnter={() => setBackgroundVideo(homeScreenVideoAbout)}
                onMouseLeave={() => setBackgroundVideo(homeScreenVideoMain)}
              >
                about
              </Link>
            </Col>
            <Col sm="auto">
              <a
                class="btn btn-outline-light btn-lg"
                role="button"
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HomeSectionMain;
