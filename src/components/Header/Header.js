import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <NavLink to="/" className="text-decoration-none h4 text-orange">
                    Dream School
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            to="/home"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-dark"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-dark"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-dark"
                        >
                            Services
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
