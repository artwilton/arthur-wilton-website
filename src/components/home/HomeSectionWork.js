import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import creativeThumbnail from "../../assets/home/about_section/creative-thumbnail.jpg"
// import devThumbnail from "../../assets/home/about_section/dev-thumbnail.jpg"
// import videoThumbnail from "../../assets/home/about_section/video-thumbnail.jpg"

import creativeThumbnail from "../../assets/home/about_section/creative-thumbnail_v3.jpg"
import devThumbnail from "../../assets/home/about_section/dev-thumbnail_v3.jpg"
import videoThumbnail from "../../assets/home/about_section/video-thumbnail_v2.jpg"


import {HomeAboutCard} from "../home"
import { CardGroup } from "react-bootstrap";

function HomeSectionWork(props) {
  return (
    <section id="Section02">
      <Container fluid className="d-flex flex-column h-100">

          <h1 className="align-self-center text-center border-bottom border-dark">
            My Work
          </h1>

          <p className="lead align-self-center text-center">testing paragraph here to talk about myself</p>

        <Row id="aboutCards" className="justify-content-center">
          <Col md="4">
            <HomeAboutCard id ="aboutCard" title={<>SOFTWARE & <br/> WEB DEV</>} thumbnail={devThumbnail} alt="test"></HomeAboutCard>
          </Col>
          <Col md="4">
          <HomeAboutCard title="VIDEO PRODUCTION" thumbnail={videoThumbnail} alt="test"></HomeAboutCard>
          </Col>
          <Col md="4">
          <HomeAboutCard title="CREATIVE PROJECTS" thumbnail={creativeThumbnail} alt="test"></HomeAboutCard>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default HomeSectionWork;
