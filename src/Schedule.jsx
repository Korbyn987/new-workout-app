import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
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
