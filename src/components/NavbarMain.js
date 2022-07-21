import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "../stylesheets/navbar.css";

function NavbarMain() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Seth Perritt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/Durtyburd">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sethperritt">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavbarMain };
