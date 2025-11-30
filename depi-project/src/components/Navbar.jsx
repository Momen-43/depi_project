import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import { Container, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logoPrescripto from "../assets/images/logo-prescripto.svg";
import toast from "react-hot-toast";

const primaryColor = "#5f6fff";

const AppNavbar = () => {
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-bottom border-primary border-2 fw-bold"
      : "text-secondary fw-bold";
  };

  // Check if current path starts with /admin
  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logoPrescripto} alt="Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-uppercase gap-3">
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

            {/* ============ ADMIN DROPDOWN MENU ============ */}
            {currentUser && userRole === "admin" && (
              <NavDropdown
                title={
                  <span className={isAdminPath ? "text-danger fw-bold" : "text-secondary fw-bold"}>
                    🛡️ ADMIN
                  </span>
                }
                id="admin-nav-dropdown"
                className="admin-dropdown"
              >
                <NavDropdown.Item as={Link} to="/admin/dashboard">
                  📊 Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/users">
                  👥 Manage Users
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/appointments">
                  📅 Manage Appointments
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/admin/settings">
                  ⚙️ Settings
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {/* ============ USER SECTION ============ */}
          {currentUser ? (
            <div className="d-flex align-items-center gap-2">
              {/* User Info with Role Badge */}
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-secondary d-none d-lg-block">
                  {currentUser.displayName || currentUser.email?.split("@")[0]}
                </span>
                {userRole === "admin" && (
                  <span className="badge bg-danger">Admin</span>
                )}
              </div>
              
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