import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import logoPrescripto from "../assets/images/logo-prescripto.svg";

const primaryColor = "#5f6fff";

const AppNavbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  const location = useLocation();


  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-bottom border-primary border-2 fw-bold"
      : "text-secondary fw-bold";
  };

  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoPrescripto} alt="Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-uppercase gap-3">
            {" "}
            <Nav.Link
              as={Link}
              to="/"
              className={getNavLinkClass("/")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/appointments"
              className={getNavLinkClass("/appointments")}
            >
              Appointments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/doctors"
              className={getNavLinkClass("/doctors")}
            >
              ALL DOCTORS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={getNavLinkClass("/about")}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={getNavLinkClass("/contact")}
            >
              CONTACT
            </Nav.Link>
          </Nav>

          {currentUser ? (
            <div className="d-flex align-items-center gap-2">

              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <Button
              as={Link}
              to="/signup"
              style={{
                backgroundColor: primaryColor,
                border: "none",
                borderRadius: "25px",
              }}
              className="px-4 py-2"
            >
              Create account
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
