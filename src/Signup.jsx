import React, { useState } from "react";
import "./App.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    weight: "",
    height: "",
    goal: "lose",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (inches):</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="goal">Goal:</label>
          <select
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="lose">Lose Weight (Cutting)</option>
            <option value="gain">Gain Weight (Bulking)</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
