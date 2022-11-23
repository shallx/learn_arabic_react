import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem";

class NavComponent extends Component {
  render() {
    return (
      // Dark nav bar with banner and 2 links on right
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="p-2" href="#home">
          Staff Asia
        </Navbar.Brand>
        {/* Empty Space with Flex */}
        <Nav className="ml-auto">
        <NavigationItem link="/home">Home</NavigationItem>
          <NavigationItem link="/banner">Banner</NavigationItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavComponent;
