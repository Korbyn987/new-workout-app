import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Workouts() {
  const [activeCategory, setActiveCategory] = useState(null);

  const workoutCategories = [
    {
      id: "back",
      title: "Back",
      icon: "💪",
      exercises: [
        { name: "Pull-Ups", difficulty: "Intermediate" },
        { name: "Deadlifts", difficulty: "Advanced" },
        { name: "Seated Rows", difficulty: "Beginner" },
        { name: "Bent Over Rows", difficulty: "Intermediate" },
        { name: "Overhead Lat Pulldown", difficulty: "Beginner" },
        { name: "Single Arm Lat Pulldown", difficulty: "Intermediate" }
      ]
    },
    {
      id: "biceps",
      title: "Biceps",
      icon: "💪",
      exercises: [
        { name: "Dumbbell Bicep Curls", difficulty: "Beginner" },
        { name: "Hammer Curls", difficulty: "Beginner" },
        { name: "Preacher Curl", difficulty: "Intermediate" },
        { name: "Cable Curl", difficulty: "Beginner" },
        { name: "Barbell Curl", difficulty: "Intermediate" }
      ]
    },
    {
      id: "chest",
      title: "Chest",
      icon: "🏋️",
      exercises: [
        { name: "Barbell Bench Press", difficulty: "Advanced" },
        { name: "Dumbbell Bench Press", difficulty: "Intermediate" },
        { name: "Chest Press", difficulty: "Beginner" },
        { name: "Pec Dec Fly", difficulty: "Beginner" },
        { name: "Cable Chest Press", difficulty: "Intermediate" },
        { name: "Dips (Chest focused)", difficulty: "Advanced" }
      ]
    },
    {
      id: "triceps",
      title: "Triceps",
      icon: "💪",
      exercises: [
        { name: "Tricep Pulldowns", difficulty: "Beginner" },
        { name: "Seated Tricep Pushdowns", difficulty: "Beginner" },
        { name: "Single Arm Tricep Pulldown", difficulty: "Intermediate" },
        { name: "Single Arm Tricep Kickback", difficulty: "Intermediate" },
        { name: "Close Grip Bench Press", difficulty: "Advanced" },
        { name: "Skull Crushers", difficulty: "Intermediate" },
        { name: "Overhead Tricep Extensions", difficulty: "Intermediate" },
        { name: "Diamond Pushups", difficulty: "Beginner" }
      ]
    },
    {
      id: "legs",
      title: "Legs",
      icon: "🦵",
      exercises: [
        { name: "Quad Focused Leg Press", difficulty: "Intermediate" },
        { name: "Hamstring and Glute Focused Leg Press", difficulty: "Intermediate" },
        { name: "Squats", difficulty: "Advanced" },
        { name: "Lunges", difficulty: "Beginner" },
        { name: "Romanian Deadlift (RDL's)", difficulty: "Advanced" },
        { name: "Hack Squats", difficulty: "Advanced" },
        { name: "Calf Raises", difficulty: "Beginner" },
        { name: "Quad Extensions", difficulty: "Beginner" },
        { name: "Hamstring Curls", difficulty: "Beginner" }
      ]
    },
    {
      id: "abdominals",
      title: "Abdominals",
      icon: "🤸‍♂️",
      exercises: [
        { name: "Plank", difficulty: "Beginner" },
        { name: "Sit-Ups", difficulty: "Beginner" },
        { name: "Weighted Sit-Ups", difficulty: "Intermediate" },
        { name: "Mountain Climbers", difficulty: "Intermediate" },
        { name: "Flutter Kicks", difficulty: "Beginner" },
        { name: "Crunches", difficulty: "Beginner" },
        { name: "Russian Twists", difficulty: "Intermediate" }
      ]
    }
  ];

  return (
    <div className="grid">
      <div className="workout-header">
        <h2 className="heading">Workout Library</h2>
        <p className="subheading">Choose your muscle group and discover exercises</p>
      </div>

      <div className="workout-categories">
        {workoutCategories.map((category) => (
          <div key={category.id} className="workout-category">
            <div 
              className={`card workout-card ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <div className="workout-card-header">
                <span className="workout-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <span className="workout-exercise-count">
                  {category.exercises.length} exercises
                </span>
              </div>

              <div className={`workout-exercises ${activeCategory === category.id ? 'show' : ''}`}>
                {category.exercises.map((exercise, index) => (
                  <div key={index} className="workout-exercise">
                    <div className="workout-exercise-info">
                      <span className="workout-exercise-name">{exercise.name}</span>
                      <span className={`badge workout-difficulty ${exercise.difficulty.toLowerCase()}`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <button className="button workout-start-btn">
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <p>&copy; 2024 The Factory Gym. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Workouts;
