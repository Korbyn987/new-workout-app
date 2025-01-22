import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Trainers() {
  return (
    <div className="grid">
      <h2 className="heading">Meet Our Elite Training Team</h2>
      
      <div className="grid grid-2">
        <div className="card trainer-card">
          <div className="trainer-content">
            <div className="trainer-image-container">
              <img 
                src="src/images/cbum_image.jpg" 
                alt="Chris Bumstead" 
                className="trainer-image"
              />
              <div className="trainer-overlay"></div>
            </div>
            <div className="trainer-details">
              <h3 className="trainer-name">Chris Bumstead</h3>
              <span className="badge trainer-specialty">Elite Trainer</span>
              <div className="trainer-credentials">
                <p><strong>Education:</strong></p>
                <p>Bachelor of Science in Exercise Science</p>
                <p><strong>Specialties:</strong></p>
                <ul>
                  <li>Strength Training</li>
                  <li>Cardiovascular Conditioning</li>
                  <li>Weight Management</li>
                </ul>
              </div>
              <button className="button trainer-contact">Schedule Session</button>
            </div>
          </div>
        </div>

        <div className="card trainer-card">
          <div className="trainer-content">
            <div className="trainer-image-container">
              <img 
                src="ronnie_image.webp" 
                alt="Ronnie Coleman" 
                className="trainer-image"
              />
              <div className="trainer-overlay"></div>
            </div>
            <div className="trainer-details">
              <h3 className="trainer-name">Ronnie Coleman</h3>
              <span className="badge trainer-specialty">Nutrition Expert</span>
              <div className="trainer-credentials">
                <p><strong>Education:</strong></p>
                <p>Master of Science in Nutrition and Dietetics</p>
                <p><strong>Specialties:</strong></p>
                <ul>
                  <li>Nutrition Counseling</li>
                  <li>Meal Planning</li>
                  <li>Weight Loss Management</li>
                </ul>
              </div>
              <button className="button trainer-contact">Schedule Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
