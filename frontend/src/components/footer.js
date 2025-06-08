import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-success text-light py-3 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Proshop &copy;{currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
