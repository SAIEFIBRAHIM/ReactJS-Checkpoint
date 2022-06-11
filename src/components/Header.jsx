import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../css/Header.css";

const Header = () => {
  return (
    <Navbar
      className="headerapp"
      sticky="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#">
          <div className="logo">SAIEF BRAHIM</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="hlinks">
            <Nav.Link className="navl active" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="navl" href="#">
              Contact me
            </Nav.Link>
            <Nav.Link className="navl" href="#">
              Hire me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
