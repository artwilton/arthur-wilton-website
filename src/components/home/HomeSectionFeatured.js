import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import featuredPreview from "../../assets/home/featured_section/feautered-project-preview.png";

function HomeSectionFeatured(props) {
  return (
    <section id="Section03">
      <Container fluid>
        <Row className="justify-content-center align-self-center">
          <Col md="2"></Col>
          <Col md="4" className="my-auto">
            <h2 className="border-bottom border-white">Featured Project:</h2>
            <h3 className="">
              PIM: The Personal <br /> Inventory Manager
            </h3>
            <p>
              Mobile Application built with a React Native frontend and Ruby on Rails backend.
            </p>
            <Button variant="outline-light" size="lg" block>
              project case study
            </Button>
          </Col>
          <Col md="4" className="my-auto">
            <img src={featuredPreview} />
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeSectionFeatured;
