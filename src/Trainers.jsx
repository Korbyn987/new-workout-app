import React from "react";
import "./App.css";

function Trainers() {
  return (
    <div>
      <header>
        <h1>Our Trainers</h1>
        <nav>
          <ul className="top-menu">
            <li>
              <a href="The_Factory_Main_Page.html">Home</a>
            </li>
            <li>
              <a href="workouts.html">Workouts</a>
            </li>
            <li>
              <a href="bmi_calculator.html">BMI Calculator</a>
            </li>
            <li>
              <a href="schedule.html">Schedule</a>
            </li>
            <li>
              <a href="trainers.html">Trainers</a>
            </li>
            <li>
              <a href="nutrition.html">Nutrition</a>
            </li>
          </ul>
          <div className="auth-links">
            <a href="login.html">Login</a>
            <a href="signup.html">Create Account</a>
          </div>
        </nav>
      </header>

      <section className="trainer">
        <h2>Meet Our Trainers</h2>

        <div className="trainer-info">
          <img src="cbum_image.jpg" alt="Trainer 1" />
          <div className="text">
            <h3>Chris Bumstead</h3>
            <p>Degree: Bachelor of Science in Exercise Science</p>
            <p>
              Capabilities: Strength training, cardiovascular conditioning,
              weight management
            </p>
          </div>
        </div>

        <div className="trainer-info">
          <img src="ronnie_image.webp" alt="Trainer 2" />
          <div className="text">
            <h3>Ronnie Coleman</h3>
            <p>Degree: Master of Science in Nutrition and Dietetics</p>
            <p>
              Capabilities: Nutrition counseling, meal planning, weight loss
              management
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
