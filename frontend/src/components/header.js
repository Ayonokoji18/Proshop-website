import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaBoxOpen,
  FaTags,
  FaUser,
  FaCalculator,
  FaYahoo,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <Navbar bg="success" variant="dark" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="proshop" />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/box">
                <FaBoxOpen />
                Box
              </Nav.Link>
              <Nav.Link href="/discount">
                <FaTags />
                Discount
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Login
              </Nav.Link>
              <Nav.Link href="/calculate">
                <FaCalculator />
                Calculator
              </Nav.Link>
              <Nav.Link href="/yahoo">
                <FaYahoo /> Yahoo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
