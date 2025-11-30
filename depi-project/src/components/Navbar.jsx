import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Prescripto</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/">HOME</Link>
          <Link to="/doctors">ALL DOCTORS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="navbar-actions">
          {currentUser ? (
            <div className="user-info">
              <span>Welcome, {currentUser.displayName}</span>
            </div>
          ) : (
            <Link to="/signup" className="create-account-btn">
              Create account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;