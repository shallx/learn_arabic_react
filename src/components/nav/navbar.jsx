import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavigationItem from "./NavigationItem";

const NavComponent = (props) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="p-2" href="#home">
      Staff Asia
    </Navbar.Brand>
    <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
      <NavigationItem link="/home">Home</NavigationItem>
      <NavigationItem link="/offer">Offer</NavigationItem>
    </Nav>

    <NavDropdown
      title="Brand"
      id="nav-dropdown"
      style={{ marginRight: "140px" }}
    >
      <NavDropdown.Item eventKey="4.1">Apex Learning</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">One Education</NavDropdown.Item>
    </NavDropdown>
  </Navbar>
);

export default NavComponent;
