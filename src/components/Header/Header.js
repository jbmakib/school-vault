import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// our header contains only the navbar
const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <NavLink
                    to="/"
                    className="text-decoration-none h4 text-orange fw-bold"
                >
                    School Vault
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            to="/home"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-orange fw-bold"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-orange fw-bold"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-orange fw-bold"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="text-decoration-none text-secondary m-2"
                            activeClassName="text-orange fw-bold"
                        >
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
