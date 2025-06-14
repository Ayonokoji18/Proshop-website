import { Container, Col, Row } from "react-bootstrap";

function Footer() {
  const nowYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-success text-light py-3 mt-5">
        <Container>
          <Row className="text-center">
            <Col>
              <p> ProShop&copy; {nowYear}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
