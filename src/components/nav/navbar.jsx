import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavigationItem from "./NavigationItem";
import { useSelector, useDispatch } from 'react-redux';
import { setBrand } from "../../redux/brand/brandSlice";

const NavComponent = (props) => {
  const { brand } = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="p-2" href="#home">
        Staff Asia
      </Navbar.Brand>
      <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
        <NavigationItem link="/home">Home</NavigationItem>
        <NavigationItem link="/offer">Offer</NavigationItem>
        <NavigationItem link="/banners">Banners</NavigationItem>
      </Nav>

      <NavDropdown
        title={brand}
        id="nav-dropdown"
        style={{ marginRight: "140px" }}
      >
        <NavDropdown.Item eventKey="4.1" onClick={() => dispatch(setBrand(0))}>Apex Learning</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" onClick={() => dispatch(setBrand(1))}>One Education</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default NavComponent;
