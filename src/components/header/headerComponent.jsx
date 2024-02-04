import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#e3f2fd" }}
      bg="l#e3f2fd"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="#home">React & JWT</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/admin" className="nav-link">
            Admin Dashboard
          </Link>
          <Link to="/user" className="nav-link">
            User Dashboard
          </Link>
        </Nav>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/logout" className="btn btn-danger">
          Logout
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
