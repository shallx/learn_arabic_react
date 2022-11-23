import React from "react";
import NavComponent from '../nav/navbar';

const Layout = (props) => (
    <>
        <NavComponent/>
        {props.children}
    </>
);

export default Layout;