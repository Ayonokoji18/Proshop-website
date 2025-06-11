import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="proshop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/box">
                <Nav.Link>
                  <FaBoxOpen />
                  Box
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/discount">
                <Nav.Link>
                  <FaTags />
                  Discount
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/calculate">
                <Nav.Link>
                  <FaCalculator />
                  Calculator
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/yahoo">
                <Nav.Link>
                  <FaYahoo /> Yahoo
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
