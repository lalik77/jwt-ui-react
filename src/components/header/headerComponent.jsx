import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Header = () => {
  const { isLoggedIn, logout, userRole } = useAuth();

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
          {isLoggedIn &&
            userRole === "Admin" && ( // Render Admin Dashboard link if user is logged in and has Admin role
              <Link to="/admin" className="nav-link">
                Admin Dashboard
              </Link>
            )}
          {isLoggedIn &&
            userRole === "User" && ( // Render User Dashboard link if user is logged in and has User role
              <Link to="/user" className="nav-link">
                User Dashboard
              </Link>
            )}
        </Nav>
        {isLoggedIn ? (
          <Link to="/home" onClick={logout} className="btn btn-danger">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
