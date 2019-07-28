import React from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./assets/style_nav.css"

function Navigation() {
    return (
        <div>
        <Navbar className="navigation" bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/team">Team</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/lessons">Lessons</Nav.Link>
                    <Nav.Link as={Link} to="/writeups">Write Ups</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navigation;
