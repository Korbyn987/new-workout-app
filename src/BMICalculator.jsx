import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function BMICalculator() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchUserProgress();
  }, [user, navigate]);

  const fetchUserProgress = async () => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      const response = await axios.get(
        `http://localhost/new-workout-app/Backend/src/get_bmi_records.php?user_id=${user.id}`
      );
      
      if (response.data.success) {
        setProgressData(response.data.records);
      } else if (response.data.message === "No records found for the given user ID.") {
        // Don't show error for no records, just empty state
        setProgressData([]);
      } else {
        setError(response.data.message || "Failed to fetch BMI records");
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const calculateBMI = async () => {
    if (!user?.id) {
      setError("Please log in to save your BMI records");
      return;
    }

    const heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
    const weightInLbs = parseFloat(weight || 0);

    if (heightInInches > 0 && weightInLbs > 0) {
      const bmi = (weightInLbs / (heightInInches * heightInInches)) * 703;
      let category = "";

      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 24.9) category = "Normal weight";
      else if (bmi < 29.9) category = "Overweight";
      else category = "Obese";

      setBmiResult(`Your BMI is ${bmi.toFixed(1)} (${category})`);

      try {
        setError("");
        console.log("Saving BMI record for user ID:", user.id);
        
        const recordData = {
          user_id: user.id,
          height_feet: parseInt(feet),
          height_inches: parseInt(inches),
          weight_lbs: parseFloat(weight),
          bmi: parseFloat(bmi.toFixed(2)),
          bmi_category: category,
        };
        
        console.log("Sending BMI record data:", recordData);

        const response = await axios.post(
          "http://localhost/new-workout-app/Backend/src/add_bmi_record.php",
          recordData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Save BMI record response:", response.data);

        if (response.data.success) {
          await fetchUserProgress(); // Refresh the progress data
          // Clear inputs after successful save
          setFeet("");
          setInches("");
          setWeight("");
          setError("");
        } else {
          setError(response.data.message || "Failed to save BMI record");
        }
      } catch (error) {
        console.error("Error saving BMI record:", error);
        setError("Failed to save BMI record");
      }
    } else {
      setError("Please enter valid height and weight values");
      setBmiResult("");
    }
  };

  if (!user) return null;

  const getProgressStats = () => {
    if (progressData.length === 0) return null;

    const latest = progressData[0];
    const oldest = progressData[progressData.length - 1];
    const bmiChange = (parseFloat(latest.bmi) - parseFloat(oldest.bmi)).toFixed(2);
    const weightChange = (parseFloat(latest.weight_lbs) - parseFloat(oldest.weight_lbs)).toFixed(1);

    return {
      bmiChange,
      weightChange,
      trend: bmiChange > 0 ? "increased" : bmiChange < 0 ? "decreased" : "maintained",
    };
  };

  const stats = getProgressStats();

  return (
    <div className="app-container">
      <div className="bmi-content">
        <section className="bmi-calculator">
          <div className="section-card">
            <h2>Calculate Your BMI</h2>
            <div className="input-group">
              <label htmlFor="feet">Height (feet):</label>
              <input
                type="number"
                id="feet"
                min="1"
                max="8"
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
                min="0"
                max="11"
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
                min="1"
                placeholder="Weight in lbs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button className="primary-button" onClick={calculateBMI}>
              Calculate BMI
            </button>
            {bmiResult && <div className="bmi-result">{bmiResult}</div>}
            {error && <div className="error-message">{error}</div>}
          </div>
        </section>

        <section className="bmi-progress">
          <div className="section-card">
            <h2>Your BMI Progress</h2>
            {loading ? (
              <div className="loading">Loading your progress...</div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : progressData.length > 0 ? (
              <>
                {stats && (
                  <div className="progress-summary">
                    <h3>Progress Overview</h3>
                    <p>
                      Your BMI has {stats.trend} by {Math.abs(stats.bmiChange)} points
                    </p>
                    <p>
                      Weight change: {Math.abs(stats.weightChange)} lbs
                      {stats.weightChange > 0 ? " gained" : " lost"}
                    </p>
                  </div>
                )}
                <div className="progress-table-wrapper">
                  <table className="progress-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>BMI</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {progressData.map((record, index) => (
                        <tr key={record.id || index}>
                          <td>
                            {new Date(record.calculated_at).toLocaleDateString()}
                          </td>
                          <td>{`${record.height_feet}'${record.height_inches}"`}</td>
                          <td>{`${record.weight_lbs} lbs`}</td>
                          <td>{record.bmi}</td>
                          <td>
                            <span
                              className={`status-badge ${record.bmi_category
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {record.bmi_category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="no-data">
                <p>No BMI records found. Calculate your BMI to start tracking!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BMICalculator;
