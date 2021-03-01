import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import featuredPreview from "../../assets/home/featured_section/feautered-project-preview.png";

function HomeSectionFeatured(props) {
  return (
    <section id="Section03">
      <Container fluid >

  <Row className="justify-content-center align-self-center">
                    <Col md="2"></Col>
                    <Col md="4" className="my-auto">
                        <h2 className="border-bottom border-white">FEATURED PROJECT:</h2>
                    </Col>
                    <Col md="4" className="my-auto">
                        <img src={featuredPreview}/>
                    </Col>
                    <Col md="2"></Col>
                </Row>

      </Container>
    </section>
  );
}

export default HomeSectionFeatured;
