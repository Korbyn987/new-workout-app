import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Make sure to adjust the path to your stylesheet if necessary

const TheFactoryMainPage = () => {
  return (
    <div>
      <header>
        <h1>The Factory</h1>
        <nav>
          <ul className="top-menu">
            <li>
              <Link to="/Workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/BMICalculator">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/Schedule">Our Schedule</Link>
            </li>
            <li>
              <Link to="/Trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/Nutrition">Nutrition</Link>
            </li>
          </ul>
          <div className="auth-links">
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Create Account</Link>
          </div>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About us:</h2>
        <p>
          Welcome to The Factory, where fitness meets community! At our gym,
          we're more than just a place to work out – we're a supportive and
          inclusive community dedicated to helping you achieve your fitness
          goals. With state-of-the-art facilities, a wide range of classes led
          by expert trainers, and personalized workout plans tailored to your
          needs, we're here to guide you on your fitness journey every step of
          the way. Whether you're a seasoned athlete or just starting out, our
          welcoming atmosphere and friendly staff will make you feel right at
          home. Join us today and discover the difference that The Factory can
          make in your life – because together, we're stronger!
        </p>
      </section>

      <section id="fitness-challenges" className="section">
        <h2>Fitness Challenges</h2>

        <h3>30-Day Abs Challenge</h3>
        <p>
          A challenge focused on strengthening and toning the abdominal muscles.
          Each day participants follow a set of exercises targeting different
          areas of the core, gradually increasing in intensity over 30 days.
        </p>

        <h3>Couch to 5K Challenge</h3>
        <p>
          Perfect for beginners who want to start running. This challenge
          provides a structured training plan that gradually builds up
          endurance, starting with a mix of walking and running intervals,
          leading up to completing a 5K (3.1 miles) run.
        </p>

        <h3>Plank Challenge</h3>
        <p>
          Participants aim to increase their plank hold time over a set period,
          such as 30 days. Starting with short durations and gradually
          increasing, this challenge helps improve core strength, stability, and
          endurance.
        </p>

        <h3>Push-Up Challenge</h3>
        <p>
          A challenge focused on improving upper body strength and endurance by
          gradually increasing the number of push-ups performed each day over a
          set period, like 30 days.
        </p>

        <h3>Burpee Challenge</h3>
        <p>
          This challenge involves progressively increasing the number of burpees
          performed each day for a set period. Burpees are a full-body exercise
          that combines strength, cardio, and agility training.
        </p>

        <h3>Water Intake Challenge</h3>
        <p>
          Staying hydrated is essential for overall health and fitness.
          Participants track their daily water intake and aim to reach a
          specified goal, such as drinking a certain number of glasses or liters
          of water per day for a week or a month.
        </p>
      </section>

      <section id="testimonials" className="section">
        <div className="testimonial">
          <img src="Sara_image.webp" alt="Avatar" className="avatar" />
          <blockquote>
            <p>
              "Joining The Factory was the best decision I ever made for my
              fitness journey. With the guidance of the amazing trainers and the
              supportive community, I was able to achieve my weight loss goals
              and build strength I never thought possible. The Factory truly
              changed my life!"
            </p>
          </blockquote>
          <cite>- Sarah J., Member since 2022</cite>
        </div>
      </section>

      <section id="upcoming-events" className="section">
        <h2>Upcoming Events</h2>

        <div className="event">
          <h3>Circuit Training Workshop</h3>
          <p>Date: April 25th, 2024</p>
          <p>Time: 10:00 AM - 12:00 PM</p>
          <p>
            Description: Join us for an intensive circuit training workshop led
            by our expert trainers. Learn new exercises, techniques, and
            routines to supercharge your fitness regimen.
          </p>
        </div>

        <div className="event">
          <h3>Yoga Retreat</h3>
          <p>Date: May 10th - May 12th, 2024</p>
          <p>Time: 8:00 AM - 6:00 PM (Each Day)</p>
          <p>
            Description: Immerse yourself in a rejuvenating yoga retreat
            weekend. Disconnect from the stresses of daily life and reconnect
            with your mind, body, and spirit through yoga and meditation.
          </p>
        </div>

        <div className="event">
          <h3>Outdoor Bootcamp</h3>
          <p>Date: June 5th, 2024</p>
          <p>Time: 6:00 PM - 7:00 PM</p>
          <p>
            Description: Challenge yourself with our outdoor bootcamp session.
            Push your limits and enjoy a high-intensity workout in the fresh air
            with our supportive community.
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 The Factory. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TheFactoryMainPage;
