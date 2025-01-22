import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setShowDropdown(false);
    };
  }, []);

  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Factory</h1>
        <nav>
          <ul className="gym-button">
            <li>
              <Link to="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/workouts" className={isActive('/workouts')}>
                Workouts
              </Link>
            </li>
            <li>
              <Link to="/bmi-calculator" className={isActive('/bmi-calculator')}>
                BMI Calculator
              </Link>
            </li>
            <li>
              <Link to="/schedule" className={isActive('/schedule')}>
                Our Schedule
              </Link>
            </li>
            <li>
              <Link to="/trainers" className={isActive('/trainers')}>
                Trainers
              </Link>
            </li>
            <li>
              <Link to="/nutrition" className={isActive('/nutrition')}>
                Nutrition
              </Link>
            </li>
          </ul>
          <div className="auth-links">
            {user ? (
              <div className="user-profile" ref={dropdownRef}>
                <button 
                  className="user-profile-button"
                  onClick={toggleDropdown}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  <div className="user-avatar">
                    {getInitials(user.username)}
                  </div>
                  <span className="user-name">{user.username}</span>
                  <span className={`dropdown-arrow ${showDropdown ? 'open' : ''}`}>▾</span>
                </button>
                
                {showDropdown && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <div className="user-avatar">
                        {getInitials(user.username)}
                      </div>
                      <div className="user-info">
                        <span className="user-name">{user.username}</span>
                        <span className="user-email">{user.email}</span>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-menu">
                      <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <span className="item-icon">👤</span>
                        Profile
                      </Link>
                      <Link to="/settings" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <span className="item-icon">⚙️</span>
                        Settings
                      </Link>
                      <button onClick={handleLogout} className="dropdown-item logout-item">
                        <span className="item-icon">🚪</span>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-link">Login</Link>
                <Link to="/signup" className="auth-link">Sign Up</Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main style={{ position: 'relative', zIndex: 0 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
