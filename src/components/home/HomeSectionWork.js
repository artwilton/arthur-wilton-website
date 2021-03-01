import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import creativeThumbnail from "../../assets/home/about_section/creative-thumbnail.jpg"
import devThumbnail from "../../assets/home/about_section/dev-thumbnail.jpg"
import videoThumbnail from "../../assets/home/about_section/video-thumbnail.jpg"


import {HomeAboutCard} from "../home"
import { CardGroup } from "react-bootstrap";

function HomeSectionWork(props) {
  return (
    <section id="Section02">
      <Container fluid className="d-flex flex-column h-100">
        <h1 className="px-4 align-self-center text-center border-bottom border-white">
          MY WORK
        </h1>

        <Row id="aboutCards" className="justify-content-center">
          <Col md="3">
            <HomeAboutCard title={<>SOFTWARE & <br/> WEB DEV</>} thumbnail={devThumbnail} alt="test"></HomeAboutCard>
          </Col>
          <Col md="3">
          <HomeAboutCard title="VIDEO PRODUCTION" thumbnail={videoThumbnail} alt="test"></HomeAboutCard>
          </Col>
          <Col md="3">
          <HomeAboutCard title="CREATIVE PROJECTS" thumbnail={creativeThumbnail} alt="test"></HomeAboutCard>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeSectionWork;
