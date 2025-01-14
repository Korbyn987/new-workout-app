import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Trainers() {
  return (
    <div>
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
