import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function BMICalculator() {
  const [feet, setFeet] = useState(""); // Height in feet
  const [inches, setInches] = useState(""); // Height in inches
  const [weight, setWeight] = useState(""); // Weight in pounds
  const [bmiResult, setBmiResult] = useState(""); // BMI calculation result
  const [progressData, setProgressData] = useState([]); // User's BMI records

  const userId = 1; // Replace with the logged-in user's ID

  // Fetch user progress data on component load
  useEffect(() => {
    axios
      .get(
        `http://localhost/new-workout-app/Backend/src/get_bmi_records.php?user_id=${userId}`
      )
      .then((response) => {
        if (response.data.success) {
          setProgressData(response.data.records);
        } else {
          console.error("No records found for the given user ID.");
        }
      })
      .catch((error) => {
        console.error("Error fetching progress data:", error);
      });
  }, [userId]);

  const calculateBMI = () => {
    const heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0); // Height in total inches
    const weightInLbs = parseFloat(weight || 0); // Weight in pounds

    // Validate inputs
    if (heightInInches > 0 && weightInLbs > 0) {
      const bmi = (weightInLbs / (heightInInches * heightInInches)) * 703; // BMI formula
      let category = "";

      // Determine BMI category
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
        height_feet: parseInt(feet), // Save height in feet
        height_inches: parseInt(inches), // Save height in inches
        weight_lbs: parseFloat(weight), // Save weight in pounds
        bmi: bmi.toFixed(2), // Save BMI value
        bmi_category: category, // Save BMI category
      };

      axios
        .post(
          "http://localhost/new-workout-app/Backend/src/add_bmi_record.php",
          record,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            transformRequest: [
              (data) => {
                return Object.keys(data)
                  .map(
                    (key) =>
                      encodeURIComponent(key) +
                      "=" +
                      encodeURIComponent(data[key])
                  )
                  .join("&");
              },
            ],
          }
        )
        .then((response) => {
          if (response.data.success) {
            // Update progress data with the new record
            setProgressData((prevData) => [response.data.record, ...prevData]);
          } else {
            console.error("Error adding BMI record:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error saving BMI record:", error);
        });
    } else {
      setBmiResult("Please enter valid values."); // Show error for invalid inputs
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
                  <td>
                    {new Date(record.calculated_at).toLocaleDateString()}{" "}
                  </td>
                  <td>{record.height_feet}</td>
                  <td>{record.height_inches}</td>
                  <td>{record.weight_lbs}</td>
                  <td>{record.bmi}</td>
                  <td>{record.bmi_category}</td>
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
