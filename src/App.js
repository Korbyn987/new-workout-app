import React, { useState, useEffect } from "react";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <h1>BMI Calculator</h1>
        <div>
          <input
            type="number"
            placeholder="Feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <input
            type="number"
            placeholder="Inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (lbs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
        </div>
        <p>{bmiResult}</p>

        <h2>Dropdown Example</h2>
        <button className="dropbtn" onClick={() => toggleDropdown("example")}>
          Toggle Dropdown
        </button>
        {dropdowns.example && (
          <div className="dropdown-content">
            <p>Dropdown Content</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
