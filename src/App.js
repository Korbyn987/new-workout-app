import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TheFactoryMainPage from "./TheFactoryMainPage";
import Workouts from "./Workouts";
import BMICalculator from "./BMICalculator";
import Schedule from "./Schedule";
import Trainers from "./Trainers";
import Nutrition from "./Nutrition";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [dropdowns, setDropdowns] = useState({});

  const calculateBMI = () => {
    const feetNum = parseFloat(feet);
    const inchesNum = parseFloat(inches);
    const weightNum = parseFloat(weight);

    if (isNaN(feetNum) || isNaN(inchesNum) || isNaN(weightNum)) {
      setBmiResult("Please enter valid values.");
      return;
    }

    const heightInInches = feetNum * 12 + inchesNum;
    const bmi = (weightNum / (heightInInches * heightInInches)) * 703;
    setBmiResult(`Your BMI is: ${bmi.toFixed(2)}`);
  };

  const toggleDropdown = (bodyPart) => {
    setDropdowns((prev) => ({
      ...prev,
      [bodyPart]: !prev[bodyPart],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.matches(".dropbtn")) {
        setDropdowns({});
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>The Factory</h1>
          <nav>
            <ul className="top-menu">
              <li>
                <Link to="/TheFactoryMainPage">Home</Link>
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

        <Routes>
          <Route path="/" element={<TheFactoryMainPage />} />
          <Route path="/Workouts" element={<Workouts />} />
          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
