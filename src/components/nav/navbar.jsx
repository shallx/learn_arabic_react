import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavigationItem from "./NavigationItem";
import { useSelector, useDispatch } from "react-redux";
import { setBrand } from "../../redux/brand/brandSlice";

const NavComponent = (props) => {
  const { brand } = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-2"
    >
      <Navbar.Brand href="#home">Staff Asia</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavigationItem link="/home">Home</NavigationItem>
          <NavigationItem link="/offer">Offer</NavigationItem>
          <NavigationItem link="/banners">Banners</NavigationItem>
        </Nav>
        <Nav>
          <NavDropdown title={brand} id="collasible-nav-dropdown">
            <NavDropdown.Item
              eventKey="4.1"
              onClick={() => dispatch(setBrand(0))}
            >
              Apex Learning
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.2"
              onClick={() => dispatch(setBrand(1))}
            >
              One Education
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
