import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationItem = (props) => (
    <NavLink style = {{textDecoration: "none"}} className="nav-link" to={props.link}>
        {props.children}
    </NavLink>
);

export default NavigationItem;