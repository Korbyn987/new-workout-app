import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import TheFactoryMainPage from "./TheFactoryMainPage";
import Workouts from "./Workouts";
import BMICalculator from "./BMICalculator";
import Schedule from "./Schedule";
import Trainers from "./Trainers";
import Nutrition from "./Nutrition";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");

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

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><TheFactoryMainPage /></Layout>} />
          <Route path="/workouts" element={<Layout><Workouts /></Layout>} />
          <Route
            path="/bmi-calculator"
            element={
              <Layout>
                <BMICalculator
                  feet={feet}
                  inches={inches}
                  weight={weight}
                  setFeet={setFeet}
                  setInches={setInches}
                  setWeight={setWeight}
                  calculateBMI={calculateBMI}
                  bmiResult={bmiResult}
                />
              </Layout>
            }
          />
          <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
          <Route path="/trainers" element={<Layout><Trainers /></Layout>} />
          <Route path="/nutrition" element={<Layout><Nutrition /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><Signup /></Layout>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
