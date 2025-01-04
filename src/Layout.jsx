// Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css"; // Ensure styles are consistent

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Factory</h1>
        <nav>
          <ul className="top-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/BMICalculator">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/Schedule">Our Schedule</Link>
            </li>
            <li>
              <Link to="/Trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/Nutrition">Nutrition</Link>
            </li>
          </ul>
          <div className="auth-links">
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Create Account</Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
    </div>
  );
};

export default Layout;
