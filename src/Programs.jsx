import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showTestimonials, setShowTestimonials] = useState(false);

  const programs = [
    { id: 1, title: 'Strength Training', description: 'Build muscle and strength with our comprehensive strength training program.', category: 'Strength' },
    { id: 2, title: 'Cardio Blast', description: 'Get your heart pumping with our high-intensity cardio workouts.', category: 'Cardio' },
    { id: 3, title: 'Yoga & Flexibility', description: 'Improve your flexibility and mindfulness with our yoga sessions.', category: 'Flexibility' },
    { id: 4, title: 'Nutrition Coaching', description: 'Learn about nutrition and meal planning for your fitness goals.', category: 'Nutrition' }
  ];

  const filteredPrograms = selectedCategory === 'All' ? programs : programs.filter(program => program.category === selectedCategory);

  return (
    <div className="programs-container">
      <h1>Our Programs</h1>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Strength')}>Strength</button>
        <button onClick={() => setSelectedCategory('Cardio')}>Cardio</button>
        <button onClick={() => setSelectedCategory('Flexibility')}>Flexibility</button>
        <button onClick={() => setSelectedCategory('Nutrition')}>Nutrition</button>
      </div>
      <div className="programs-list">
        {filteredPrograms.map(program => (
          <div key={program.id} className="program-card">
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <button className="cta-button" onClick={() => alert(`You clicked on ${program.title}!`)}>Learn More</button>
          </div>
        ))}
      </div>
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <button className="toggle-testimonials" onClick={() => setShowTestimonials(!showTestimonials)}>{showTestimonials ? 'Hide' : 'Show'} Testimonials</button>
        {showTestimonials && (
          <div>
            <p>"The strength training program transformed my fitness journey!" - Alex</p>
            <p>"I love the cardio blast sessions! They are intense but so rewarding." - Jamie</p>
          </div>
        )}
      </div>
      <div className="call-to-action">
        <h2>Ready to Start Your Journey?</h2>
        <Link to="/signup"><button className="cta-button">Sign Up Now</button></Link>
      </div>
    </div>
  );
};

export default Programs;
