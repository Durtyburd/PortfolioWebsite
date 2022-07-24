import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { scroller } from "react-scroll";

import "../stylesheets/navbar.css";

function NavbarMain() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="myName">Seth Perritt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("text-1", {
                  smooth: true,
                  offset: -400,
                  duration: 500,
                })
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("text-skills", {
                  smooth: true,
                  offset: -400,
                  duration: 500,
                })
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("project-text", {
                  smooth: true,
                  offset: -400,
                  duration: 500,
                })
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("contact-text", {
                  smooth: true,
                  offset: -400,
                  duration: 500,
                })
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavbarMain };
