import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBoxOpen, FaOpencart, FaTags, FaUser, FaYahoo } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="success" variant="light" collapseOnSelect expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="ProShop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/box">
                <Nav.Link>
                  <FaBoxOpen className="me-1" /> Box
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaOpencart className="me-1" />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser className="me-1" /> User
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/yahoo">
                <Nav.Link>
                  <FaYahoo className="me-1" /> Yahoo
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/tags">
                <Nav.Link>
                  <FaTags className="me-1" /> Tags
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
