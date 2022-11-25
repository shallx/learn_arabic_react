import React from "react";
import { Container } from "react-bootstrap";
import NavComponent from '../nav/navbar';

const Layout = (props) => (
    <>
        <NavComponent/>
        <Container>
            {props.children}
        </Container>
    </>
);

export default Layout;