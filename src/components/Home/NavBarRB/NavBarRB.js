import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBarRB.css";

const NavBarRB = () => {
  return (
    <>
      <Navbar className="navBarRb" bg="light" expand="lg">
        <Navbar.Brand>
          <Link className="navLink" to="/home">
            TS MARKETPLACE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link className="nav-link mr-5" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link mr-5" to="/login">
                Log In
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link mr-5" to="/signup">
                Sign Up
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link className="nav-link mr-5" to="/dashboard">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link mr-5 text-white" to="/dashboard">
                <button className="btn btn-brand text-white">
                  Post an Assignment
                </button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarRB;
