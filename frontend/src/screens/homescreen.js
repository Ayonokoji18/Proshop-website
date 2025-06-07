import { Row, Col } from "react-bootstrap";
import products from "../products.js";

function HomeScreen() {
  return (
    <>
      <h1> Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "300px", height: "auto" }}
            />
            <h3> {product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
