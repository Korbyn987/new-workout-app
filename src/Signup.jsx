import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    weight: "",
    height: "",
    goal: "lose",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long");
      return;
    }

    if (!formData.weight || formData.weight <= 0) {
      setError("Please enter a valid weight");
      return;
    }

    if (!formData.height || formData.height <= 0) {
      setError("Please enter a valid height");
      return;
    }

    setIsLoading(true);

    try {
      const submitData = new FormData();
      submitData.append("username", formData.username);
      submitData.append("password", formData.password);
      submitData.append("weight", formData.weight);
      submitData.append("height", formData.height);
      submitData.append("goal", formData.goal);

      console.log("Sending signup request with data:", {
        username: formData.username,
        weight: formData.weight,
        height: formData.height,
        goal: formData.goal
      });

      const response = await fetch("http://localhost/new-workout-app/Backend/src/signup.php", {
        method: "POST",
        body: submitData,
      });

      const data = await response.text();
      console.log("Raw response:", data);

      let jsonData;
      try {
        jsonData = JSON.parse(data);
      } catch (e) {
        console.error("Failed to parse JSON response:", e);
        setError("Server returned invalid response. Please try again.");
        return;
      }

      if (jsonData.error) {
        setError(jsonData.error);
      } else if (jsonData.success) {
        // Successful signup
        login({
          id: jsonData.user.id,
          username: jsonData.user.username
        });
        navigate("/");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-morphism">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Join The Factory and start your fitness journey</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="auth-input"
                minLength="3"
              />
              <label htmlFor="username" className="floating-label">Username</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="auth-input"
                minLength="6"
              />
              <label htmlFor="password" className="floating-label">Password</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="auth-input"
              />
              <label htmlFor="confirmPassword" className="floating-label">Confirm Password</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="Weight (lbs)"
                value={formData.weight}
                onChange={handleChange}
                required
                className="auth-input"
                min="1"
                step="0.1"
              />
              <label htmlFor="weight" className="floating-label">Weight (lbs)</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="number"
                id="height"
                name="height"
                placeholder="Height (inches)"
                value={formData.height}
                onChange={handleChange}
                required
                className="auth-input"
                min="1"
                step="0.1"
              />
              <label htmlFor="height" className="floating-label">Height (inches)</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="goal" className="select-label">Fitness Goal</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="auth-select"
            >
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
