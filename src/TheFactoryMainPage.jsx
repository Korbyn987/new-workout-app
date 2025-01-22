import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const TheFactoryMainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="main-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to The Factory</h1>
          <p className="hero-subtitle">Where Fitness Meets Innovation</p>
          <div className="hero-cta">
            <Link to="/signup" className="cta-button primary">Get Started</Link>
            <Link to="/programs" className="cta-button secondary">View Programs</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Features Grid */}
      <section className={`features-grid ${isVisible ? 'fade-in' : ''}`}>
        <div className="feature-card">
          <div className="feature-icon">💪</div>
          <h3>Expert Training</h3>
          <p>Personalized workout plans designed by certified professionals</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Goal Tracking</h3>
          <p>Advanced metrics to monitor your progress</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🥗</div>
          <h3>Nutrition Guide</h3>
          <p>Customized meal plans for optimal results</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Community</h3>
          <p>Join a supportive network of fitness enthusiasts</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section glass-morphism">
        <div className="about-content">
          <h2>About The Factory</h2>
          <p>
            Welcome to The Factory, where fitness meets community! We're more than just a gym – 
            we're a supportive and inclusive community dedicated to helping you achieve your fitness goals. 
            With state-of-the-art facilities and expert trainers, we're here to guide you on your 
            fitness journey every step of the way.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section">
        <h2>Current Challenges</h2>
        <div className="challenges-grid">
          <div className="challenge-card">
            <div className="challenge-header">
              <h3>30-Day Abs Challenge</h3>
              <span className="difficulty">Intermediate</span>
            </div>
            <p>Transform your core with our progressive ab workout program</p>
            <div className="challenge-stats">
              <span>🏃 30 days</span>
              <span>💪 Core Focus</span>
              <span>🔥 Daily Tasks</span>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-header">
              <h3>Couch to 5K</h3>
              <span className="difficulty">Beginner</span>
            </div>
            <p>Start your running journey with our structured training plan</p>
            <div className="challenge-stats">
              <span>🏃 8 weeks</span>
              <span>💪 Cardio</span>
              <span>🔥 Progressive</span>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-header">
              <h3>Strength Master</h3>
              <span className="difficulty">Advanced</span>
            </div>
            <p>Push your limits with our intensive strength program</p>
            <div className="challenge-stats">
              <span>🏃 6 weeks</span>
              <span>💪 Full Body</span>
              <span>🔥 High Intensity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The Factory transformed my approach to fitness. The trainers are amazing!"</p>
              <div className="testimonial-author">
                <span className="author-name">Sarah J.</span>
                <span className="author-achievement">Lost 30 lbs in 6 months</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Best gym community I've ever been part of. The support is incredible!"</p>
              <div className="testimonial-author">
                <span className="author-name">Mike R.</span>
                <span className="author-achievement">Gained 15 lbs muscle mass</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheFactoryMainPage;
