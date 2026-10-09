
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          ServiceHub
        </Link>
      </div>

      {/* Navigation */}
      <div className="navbar-links">

        {/* Home */}
        <Link to="/" className="nav-link">
           Home
        </Link>

        {/* Services */}
        <Link to="/services" className="nav-link">
          Services
        </Link>

        {/* Logged-in user options */}
        {isLoggedIn && (
          <>
            <Link
              to="/my-bookings"
              className="nav-link"
            >
              My Bookings
            </Link>

            <Link
              to="/profile"
              className="nav-link"
            >
              Profile
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

        {/* Logged-out user options */}
        {!isLoggedIn && (
          <>
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

