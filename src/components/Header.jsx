import React, { Component, Fragment } from "react";
import { NavLink, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../custom.css";
class Header extends Component {
  render() {
    return (
      <Fragment>
        <title></title>
        <Navbar
          className="navBackground"
          expand="lg"
          fixed="top"
          variant="light"
        >
          <Navbar.Brand href="/" className="navTitle">
            <img src="assets/img/logo/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <NavDropdown.Divider />
            </Nav>
            <Nav>
              <NavLink as={Link} to="/" className="navItem">
                Home
              </NavLink>
              <NavLink as={Link} to="/about" className="navItem">
                About Me
              </NavLink>
              <NavLink as={Link} to="/service" className="navItem">
                Services
              </NavLink>

              <NavLink as={Link} to="/project" className="navItem">
                Project
              </NavLink>
              <NavLink as={Link} to="/portfolio" className="navItem">
                Portfolio
              </NavLink>
              <NavLink as={Link} to="/contact" className="navItem">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;
