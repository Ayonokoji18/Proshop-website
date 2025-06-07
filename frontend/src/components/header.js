import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaTags, FaBoxOpen } from "react-icons/fa";
import logo from "../assets/logo.png";

function App() {
  return (
    <header>
      <Navbar bg="danger " variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="ProShop" />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id=" basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Login
              </Nav.Link>
              <Nav.Link href="/discounts">
                <FaTags />
                Discounts
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <FaBoxOpen />
                orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default App;
