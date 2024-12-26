import React from "react";
import "./App.css";

const Schedule = () => {
  return (
    <div>
      <header>
        <h1>Our Schedule</h1>
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
      <section className="schedule">
        <h2>Weekly Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours Open and Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>
                Open - 6:00AM <br /> Cardio - 8:00 AM <br /> Yoga - 5:00 PM{" "}
                <br /> Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>
                Open - 6:00AM <br />
                Strength Training - 9:00 AM <br />
                Pilates - 6:00 PM
                <br />
                Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>
                Open - 6:00AM <br />
                HIIT Workout - 7:00 AM <br />
                Zumba - 6:00 PM
                <br />
                Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>
                Open - 6:00AM <br />
                Yoga - 8:00 AM <br />
                Strength Training - 5:00 PM <br />
                Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>
                Open - 6:00AM
                <br />
                Pilates - 9:00 AM <br />
                Cardio - 6:00 PM
                <br />
                Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>
                Open - 6:00AM <br />
                HIIT Workout - 10:00 AM <br />
                Zumba - 4:00 PM
                <br />
                Closes - 12:00AM
              </td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>
                Open - 6:00AM <br />
                No Classes <br />
                Closes - 12:00AM
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Schedule;
