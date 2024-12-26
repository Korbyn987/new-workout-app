import React, { useState } from "react";
import "./App.css";

function Nutrition() {
  const [recipeType, setRecipeType] = useState("cutting");

  const toggleDropdown = (e) => {
    const dropdown = e.currentTarget.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
      <header>
        <h1>Nutrition</h1>
        <nav>
          <ul className="top-menu">
            <li>
              <a href="/The_Factory_Main_Page">Home</a>
            </li>
            <li>
              <a href="/workouts">Workouts</a>
            </li>
            <li>
              <a href="/bmi_calculator">BMI Calculator</a>
            </li>
            <li>
              <a href="/schedule">Schedule</a>
            </li>
            <li>
              <a href="/trainers">Trainers</a>
            </li>
            <li>
              <a href="/nutrition">Nutrition</a>
            </li>
          </ul>
          <div className="auth-links">
            <a href="/login">Login</a>
            <a href="/signup">Create Account</a>
          </div>
        </nav>
      </header>

      <section className="nutrition-info">
        <h2>General Nutritional Information</h2>
        <p>
          Here you can find information about various nutrients, their
          importance, and their sources.
        </p>
      </section>

      <section className="good-diet">
        <h2>Good Diet to Keep</h2>
        <p>
          A good diet should be balanced and include a variety of nutrient-rich
          foods. Here are some key components:
        </p>
        <ul>
          <li>Fruits and vegetables: High in vitamins, minerals, and fiber.</li>
          <li>Whole grains: Provide energy and fiber.</li>
          <li>
            Lean proteins: Chicken, fish, beans, and legumes for muscle repair
            and growth.
          </li>
          <li>Healthy fats: Avocado, nuts, and olive oil for heart health.</li>
          <li>
            Dairy or dairy alternatives: Calcium-rich options like milk, yogurt,
            or fortified plant-based milk.
          </li>
          <li>
            Hydration: Drink plenty of water throughout the day to stay
            hydrated.
          </li>
          <li>Limit processed foods, added sugars, and excessive sodium.</li>
        </ul>
      </section>

      <section className="bulking-foods">
        <h2>Bulking Foods</h2>
        <p>
          When bulking, it's important to consume a surplus of calories to
          support muscle growth. Here are some foods that can help:
        </p>
        <ul>
          <li>Chicken breast</li>
          <li>Salmon</li>
          <li>Beef</li>
          <li>Quinoa</li>
          <li>Sweet potatoes</li>
          <li>Avocado</li>
          <li>Whole milk</li>
          <li>Nuts and seeds</li>
        </ul>
      </section>

      <section className="cutting-foods">
        <h2>Cutting Weight Foods</h2>
        <p>
          When cutting weight, it's important to focus on nutrient-dense foods
          that are low in calories. Here are some foods that can help:
        </p>
        <ul>
          <li>Leafy greens (spinach, kale)</li>
          <li>Broccoli</li>
          <li>Lean proteins (chicken breast, turkey breast)</li>
          <li>Fish (tuna, tilapia)</li>
          <li>Egg whites</li>
          <li>Low-fat dairy (Greek yogurt, cottage cheese)</li>
          <li>Berries</li>
          <li>Legumes (beans, lentils)</li>
        </ul>
      </section>

      <div className="recipe-container">
        <h2>Recipes</h2>
        <label htmlFor="recipe-type">Are you cutting or bulking?</label>
        <select
          id="recipe-type"
          value={recipeType}
          onChange={(e) => setRecipeType(e.target.value)}
        >
          <option value="cutting">Cutting Weight</option>
          <option value="bulking">Gaining Weight</option>
        </select>

        <div className="recipe">
          <button className="recipe-btn" onClick={toggleDropdown}>
            Grilled Chicken Salad
          </button>
          <div className="recipe-dropdown" style={{ display: "none" }}>
            <ul className="ingredients-list">
              <li>Grilled chicken breast strips</li>
              <li>Mixed greens (spinach, lettuce, arugula)</li>
              <li>Cherry tomatoes</li>
              <li>Cucumber slices</li>
              <li>Red onion slices</li>
              <li>Balsamic vinaigrette dressing</li>
            </ul>
          </div>
        </div>

        <div className="recipe">
          <button className="recipe-btn" onClick={toggleDropdown}>
            Protein Smoothie
          </button>
          <div className="recipe-dropdown" style={{ display: "none" }}>
            <ul className="ingredients-list">
              <li>Protein powder (whey or plant-based)</li>
              <li>Frozen mixed berries</li>
              <li>Spinach leaves</li>
              <li>Almond milk</li>
              <li>Chia seeds</li>
              <li>Optional: banana or honey for sweetness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
