import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="grid">
      <h2 className="heading">Weekly Class Schedule</h2>
      
      <div className="card">
        <div className="table-container schedule-table">
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Classes & Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge">Monday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">8:00 AM</span>
                      <span>Cardio Blast</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">5:00 PM</span>
                      <span>Power Yoga</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Tuesday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">9:00 AM</span>
                      <span>Strength Training</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">6:00 PM</span>
                      <span>Pilates</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Wednesday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">7:00 AM</span>
                      <span>HIIT Workout</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">6:00 PM</span>
                      <span>Zumba</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Thursday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">8:00 AM</span>
                      <span>Yoga Flow</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">5:00 PM</span>
                      <span>Strength Training</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Friday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">9:00 AM</span>
                      <span>Pilates</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">6:00 PM</span>
                      <span>Cardio Mix</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Saturday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">10:00 AM</span>
                      <span>HIIT Workout</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">4:00 PM</span>
                      <span>Zumba Party</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">Sunday</span>
                </td>
                <td>
                  <div className="schedule-item">
                    <div className="time-slot">
                      <span className="badge">6:00 AM</span>
                      <span>Gym Opens</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">All Day</span>
                      <span>Open Gym - No Classes</span>
                    </div>
                    <div className="time-slot">
                      <span className="badge">12:00 AM</span>
                      <span>Gym Closes</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
