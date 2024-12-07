import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Header.css';

// logo
import Logo from '../assets/logo.png';

export function Header(props) {
    return (
        <Navbar bg="light" expand="sm" className="navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} className="logo" alt="Wine Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
                        <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
