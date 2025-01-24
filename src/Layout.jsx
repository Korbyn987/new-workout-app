import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import UserDropdownPortal from "./components/UserDropdownPortal";
import "./App.css";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const stars = document.querySelector('.stars');
    const planets = document.querySelector('.planets');

    console.log('Stars element:', stars);
    console.log('Planets element:', planets);

    if (stars && planets) {
        // Create star elements
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.opacity = Math.random();
            stars.appendChild(star);
            console.log(`Created star ${i+1} of 100:`, star);
        }

        // Create planet elements
        for (let i = 0; i < 5; i++) {
            const planet = document.createElement('div');
            planet.className = 'planet';
            planet.style.left = Math.random() * 100 + '%';
            planet.style.top = Math.random() * 100 + '%';
            planets.appendChild(planet);
            console.log(`Created planet ${i+1} of 5:`, planet);
        }
    }
  }, []);

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

  const toggleDropdown = () => {
    if (!showDropdown && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.right - 240, // 240px is the dropdown width
      });
    }
    setShowDropdown(!showDropdown);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="App">
      <header className="App-header galaxy-header">
        <div className="stars"></div>
        <div className="planets"></div>
        <div className="header-content">
          <h1>The Factory</h1>
          <div className="header-right">
            {user ? (
              <div className="user-profile">
                <button 
                  ref={buttonRef}
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
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-link">Login</Link>
                <Link to="/signup" className="auth-link">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
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
        </nav>
      </header>

      <main>
        {children}
      </main>

      {user && (
        <UserDropdownPortal
          show={showDropdown}
          onClose={() => setShowDropdown(false)}
          user={user}
          handleLogout={handleLogout}
          getInitials={getInitials}
          position={dropdownPosition}
        />
      )}
    </div>
  );
};

export default Layout;
