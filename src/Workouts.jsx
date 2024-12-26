import React from "react";
import "./App.css";

function Workouts() {
  const toggleDropdown = (id) => {
    const dropdown = document.getElementById(`${id}Dropdown`);
    dropdown.classList.toggle("show");
  };

  return (
    <div>
      <header>
        <h1>Workouts</h1>
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
              <a href="trainers.html">Trainer</a>
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
      {/* All od these classes below have a # in the href section, mkake sure to link
        the correct path in order to further see the workouts and GUI's pertained to the workout */}
      <section id="back">
        <h2>Back Workouts</h2>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("back")}>
            Back Workouts
          </button>

          <div className="dropdown-content" id="backDropdown">
            <a href="#">Pull-Ups</a>
            <a href="#">Deadlifts</a>
            <a href="#">Seated Rows</a>
            <a href="#">Bent Over Rows</a>
            <a href="#">Overhead Lat Pulldown</a>
            <a href="#">Single Arm Lat Pulldown</a>
          </div>
        </div>
      </section>

      <section id="biceps">
        <h2>Bicep Workouts</h2>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("biceps")}>
            Bicep Workouts
          </button>
          <div className="dropdown-content" id="bicepsDropdown">
            <a href="#">Dumbbell Bicep Curls</a>
            <a href="#">Hammer Curls</a>
            <a href="#">Preacher Curl</a>
            <a href="#">Cable Curl</a>
            <a href="#">Barbell Curl</a>
          </div>
        </div>
      </section>

      <section id="chest">
        <h2>Chest Workouts</h2>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("chest")}>
            Chest Workouts
          </button>
          <div className="dropdown-content" id="chestDropdown">
            <a href="#">Barbell Bench Press</a>
            <a href="#">Dumbbell Bench Press</a>
            <a href="#">Chest Press</a>
            <a href="#">Pec Dec Fly</a>
            <a href="#">Cable Chest Press</a>
            <a href="#">Dips (Chest focused)</a>
          </div>
        </div>
      </section>

      <section id="triceps">
        <h2>Tricep Workouts</h2>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("triceps")}>
            Triceps
          </button>
          <div className="dropdown-content" id="tricepsDropdown">
            <a href="#">Tricep Pulldowns</a>
            <a href="#">Seated Tricep Pushdowns</a>
            <a href="#">Single Arm Tricep Pulldown</a>
            <a href="#">Bent Over Row</a>
            <a href="#">Single Arm Tricep Kickback</a>
            <a href="#">Close Grip Bench Press</a>
            <a href="#">Skull Crushers</a>
            <a href="#">Overhead Tricep Extensions</a>
            <a href="#">Diamond Pushups</a>
          </div>
        </div>
      </section>

      <section id="legs">
        <h2>Leg Workouts</h2>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("legs")}>
            Leg Workouts
          </button>
          <div className="dropdown-content" id="legsDropdown">
            <a href="#">Quad Focused Leg Press</a>
            <a href="#">Hamstring and Glute Focused Leg Press</a>
            <a href="#">Squats</a>
            <a href="#">Lunges</a>
            <a href="#">Romanian Deadlift (RDL's)</a>
            <a href="#">Hack Squats</a>
            <a href="#">Calf Raises</a>
            <a href="#">Quad Extensions</a>
            <a href="#">Hamstring Curls</a>
            <a href="#">Prone Hamstring Curls</a>
            <a href="#">Goblet Squats</a>
            <a href="#">Bulgarian Split Squats</a>
            <a href="#">Hip Abductors</a>
            <a href="#">Hip Adductors</a>
            <a href="#">Weighted Hip Thrusts</a>
          </div>
        </div>
      </section>

      <section id="abdominals">
        <h2>Abdominal Workouts</h2>
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("abdominals")}
          >
            Abdominals
          </button>
          <div className="dropdown-content" id="abdominalsDropdown">
            <a href="#">Plank</a>
            <a href="#">Sit-Ups</a>
            <a href="#">Weighted Sit-Ups</a>
            <a href="#">Mountain Climbers</a>
            <a href="#">Flutter Kicks</a>
            <a href="#">Crunches</a>
            <a href="#">Russian Twists</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 The Factory Gym. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Workouts;
