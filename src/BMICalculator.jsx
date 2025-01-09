import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function BMICalculator() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [progressData, setProgressData] = useState([]);

  const userId = 1; // Replace with the logged-in user's ID

  // Fetch user progress data on component load
  useEffect(() => {
    axios
      .get(`/api/bmiRecords/${userId}`)
      .then((response) => {
        setProgressData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching progress data:", error);
      });
  }, [userId]);

  const calculateBMI = () => {
    const heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
    const weightInLbs = parseFloat(weight || 0);
    if (heightInInches > 0 && weightInLbs > 0) {
      const bmi = (weightInLbs / (heightInInches * heightInInches)) * 703;
      let category = "";

      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi < 24.9) {
        category = "Normal weight";
      } else if (bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      setBmiResult(`Your BMI is ${bmi.toFixed(1)} (${category}).`);

      // Save the result to the database
      const record = {
        userId: userId,
        height_feet: parseInt(feet),
        height_inches: parseInt(inches),
        weight_lbs: parseFloat(weight),
        bmi: bmi.toFixed(2),
        bmi_category: category,
      };

      axios
        .post("/api/bmiRecords", record)
        .then((response) => {
          // Update progress data with the new record
          setProgressData((prevData) => [response.data, ...prevData]);
        })
        .catch((error) => {
          console.error("Error saving BMI record:", error);
        });
    } else {
      setBmiResult("Please enter valid values.");
    }
  };

  return (
    <div>
      <section className="calculator-container">
        <div className="calculator">
          <h2>Calculate Your BMI</h2>
          <div className="input-group">
            <label htmlFor="feet">Height (feet):</label>
            <input
              type="number"
              id="feet"
              placeholder="Feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="inches">Height (inches):</label>
            <input
              type="number"
              id="inches"
              placeholder="Inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="weight">Weight (lbs):</label>
            <input
              type="number"
              id="weight"
              placeholder="Weight in lbs"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <div id="result">{bmiResult}</div>
        </div>
        <div className="progress-table-container">
          <h2>User Progress</h2>
          <table className="progress-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Height (feet)</th>
                <th>Height (inches)</th>
                <th>Weight (lbs)</th>
                <th>BMI</th>
                <th>BMI Category</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((record) => (
                <tr key={record.id}>
                  <td>{new Date(record.calculated_at).toLocaleDateString()}</td>
                  <td>{record.heightFeet}</td>
                  <td>{record.heightInches}</td>
                  <td>{record.weightLbs}</td>
                  <td>{record.bmi}</td>
                  <td>{record.bmiCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default BMICalculator;
