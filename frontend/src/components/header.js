import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaShoppingCart,
  FaUser,
  FaBoxOpen,
  FaTags,
  FaHeart,
} from "react-icons/fa";

function Header() {
  return (
    <header>
      <Navbar bg="danger" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"> ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart className="me-1" /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser className="me-1" /> Sign In
              </Nav.Link>
              <Nav.Link href="/order">
                <FaBoxOpen />
                Orders
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <FaHeart /> wishlist
              </Nav.Link>
              <Nav.Link href="/discount">
                <FaTags /> Discount/Deals
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
