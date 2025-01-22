import React, { useState } from "react";
import "./App.css";

function Nutrition() {
  const [recipeType, setRecipeType] = useState("cutting");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = {
    cutting: [
      {
        id: 1,
        title: "Grilled Chicken Salad",
        calories: 350,
        protein: "35g",
        carbs: "15g",
        fats: "18g",
        prepTime: "20 mins",
        difficulty: "Easy",
        ingredients: [
          "2 chicken breasts",
          "Mixed greens",
          "Cherry tomatoes",
          "Cucumber",
          "Red onion",
          "Balsamic vinaigrette"
        ],
        instructions: [
          "Grill chicken until cooked through",
          "Chop vegetables",
          "Mix ingredients in a bowl",
          "Add dressing and toss"
        ]
      },
      {
        id: 2,
        title: "Protein Smoothie Bowl",
        calories: 280,
        protein: "25g",
        carbs: "30g",
        fats: "8g",
        prepTime: "10 mins",
        difficulty: "Easy",
        ingredients: [
          "1 scoop protein powder",
          "Mixed berries",
          "Spinach",
          "Almond milk",
          "Chia seeds",
          "Banana (optional)"
        ],
        instructions: [
          "Blend protein powder with almond milk",
          "Add frozen berries and spinach",
          "Blend until smooth",
          "Top with chia seeds"
        ]
      },
      {
        id: 3,
        title: "Tuna Lettuce Wraps",
        calories: 240,
        protein: "28g",
        carbs: "8g",
        fats: "12g",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
          "2 cans tuna in water",
          "Large lettuce leaves",
          "Diced celery",
          "Red onion",
          "Greek yogurt",
          "Lemon juice",
          "Black pepper"
        ],
        instructions: [
          "Drain tuna and mix with Greek yogurt",
          "Add diced vegetables and seasonings",
          "Wash and dry lettuce leaves",
          "Fill leaves with tuna mixture"
        ]
      },
      {
        id: 4,
        title: "Turkey and Quinoa Bowl",
        calories: 380,
        protein: "32g",
        carbs: "45g",
        fats: "10g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "Ground turkey breast",
          "Quinoa",
          "Bell peppers",
          "Broccoli",
          "Soy sauce",
          "Garlic",
          "Ginger"
        ],
        instructions: [
          "Cook quinoa according to package",
          "Brown turkey with garlic and ginger",
          "Steam broccoli and peppers",
          "Combine all ingredients with soy sauce"
        ]
      },
      {
        id: 5,
        title: "Greek Yogurt Parfait",
        calories: 290,
        protein: "22g",
        carbs: "35g",
        fats: "7g",
        prepTime: "10 mins",
        difficulty: "Easy",
        ingredients: [
          "Greek yogurt",
          "Mixed berries",
          "Low-fat granola",
          "Honey",
          "Cinnamon"
        ],
        instructions: [
          "Layer yogurt in a glass",
          "Add berries and granola",
          "Drizzle with honey",
          "Sprinkle with cinnamon"
        ]
      },
      {
        id: 16,
        title: "Egg White Frittata",
        calories: 260,
        protein: "32g",
        carbs: "12g",
        fats: "10g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "8 egg whites",
          "Spinach",
          "Mushrooms",
          "Bell peppers",
          "Low-fat feta",
          "Fresh herbs",
          "Black pepper"
        ],
        instructions: [
          "Sauté vegetables until soft",
          "Whisk egg whites with herbs",
          "Pour over vegetables",
          "Bake until set",
          "Top with feta"
        ]
      },
      {
        id: 17,
        title: "Shrimp and Zucchini Noodles",
        calories: 285,
        protein: "35g",
        carbs: "15g",
        fats: "12g",
        prepTime: "20 mins",
        difficulty: "Medium",
        ingredients: [
          "Large shrimp",
          "Zucchini noodles",
          "Garlic",
          "Cherry tomatoes",
          "Lemon",
          "Fresh basil",
          "Olive oil"
        ],
        instructions: [
          "Spiralize zucchini",
          "Sauté garlic and shrimp",
          "Add zucchini noodles",
          "Season with lemon and basil"
        ]
      },
      {
        id: 18,
        title: "Cottage Cheese Bowl",
        calories: 310,
        protein: "28g",
        carbs: "25g",
        fats: "14g",
        prepTime: "10 mins",
        difficulty: "Easy",
        ingredients: [
          "Low-fat cottage cheese",
          "Sliced almonds",
          "Fresh peaches",
          "Honey",
          "Cinnamon",
          "Chia seeds"
        ],
        instructions: [
          "Layer cottage cheese in bowl",
          "Add sliced peaches",
          "Top with almonds and chia",
          "Drizzle with honey"
        ]
      },
      {
        id: 25,
        title: "Cauliflower Rice Stir-Fry",
        calories: 275,
        protein: "30g",
        carbs: "18g",
        fats: "11g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "Cauliflower rice",
          "Diced chicken breast",
          "Snow peas",
          "Bell peppers",
          "Ginger",
          "Garlic",
          "Low-sodium soy sauce",
          "Green onions"
        ],
        instructions: [
          "Rice the cauliflower",
          "Cook chicken with ginger and garlic",
          "Add vegetables",
          "Stir in cauliflower rice",
          "Season with soy sauce",
          "Garnish with green onions"
        ]
      }
    ],
    bulking: [
      {
        id: 6,
        title: "High-Protein Pasta",
        calories: 650,
        protein: "45g",
        carbs: "80g",
        fats: "22g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "Whole grain pasta",
          "Ground turkey",
          "Marinara sauce",
          "Parmesan cheese",
          "Olive oil",
          "Garlic and herbs"
        ],
        instructions: [
          "Cook pasta according to package",
          "Brown turkey with garlic",
          "Mix with sauce",
          "Top with cheese"
        ]
      },
      {
        id: 7,
        title: "Peanut Butter Protein Shake",
        calories: 580,
        protein: "40g",
        carbs: "55g",
        fats: "28g",
        prepTime: "5 mins",
        difficulty: "Easy",
        ingredients: [
          "2 scoops protein powder",
          "2 tbsp peanut butter",
          "Banana",
          "Oats",
          "Whole milk",
          "Honey"
        ],
        instructions: [
          "Blend protein powder with milk",
          "Add remaining ingredients",
          "Blend until smooth",
          "Add ice if desired"
        ]
      },
      {
        id: 8,
        title: "Salmon Rice Bowl",
        calories: 720,
        protein: "42g",
        carbs: "65g",
        fats: "35g",
        prepTime: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "Salmon fillet",
          "Brown rice",
          "Avocado",
          "Sweet potato",
          "Sesame oil",
          "Soy sauce",
          "Seaweed"
        ],
        instructions: [
          "Cook rice and roast sweet potato",
          "Pan-sear salmon",
          "Slice avocado",
          "Assemble bowl and dress with sauces"
        ]
      },
      {
        id: 9,
        title: "Loaded Sweet Potato",
        calories: 550,
        protein: "35g",
        carbs: "70g",
        fats: "20g",
        prepTime: "45 mins",
        difficulty: "Medium",
        ingredients: [
          "Large sweet potato",
          "Black beans",
          "Chicken breast",
          "Cheese",
          "Greek yogurt",
          "Green onions"
        ],
        instructions: [
          "Bake sweet potato until soft",
          "Cook and shred chicken",
          "Heat black beans",
          "Top potato with ingredients"
        ]
      },
      {
        id: 10,
        title: "Mass Gainer Oatmeal",
        calories: 680,
        protein: "38g",
        carbs: "85g",
        fats: "25g",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
          "Steel-cut oats",
          "Protein powder",
          "Banana",
          "Almonds",
          "Whole milk",
          "Maple syrup",
          "Cinnamon"
        ],
        instructions: [
          "Cook oats with milk",
          "Stir in protein powder",
          "Add sliced banana and nuts",
          "Top with syrup and cinnamon"
        ]
      },
      {
        id: 19,
        title: "Triple Protein Burger",
        calories: 750,
        protein: "55g",
        carbs: "45g",
        fats: "40g",
        prepTime: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "Lean beef patty",
          "Whole grain bun",
          "Fried egg",
          "Bacon",
          "Avocado",
          "Cheese",
          "Lettuce and tomato"
        ],
        instructions: [
          "Grill burger to preference",
          "Cook egg and bacon",
          "Toast bun",
          "Layer ingredients",
          "Add condiments"
        ]
      },
      {
        id: 20,
        title: "Muscle Building Wrap",
        calories: 680,
        protein: "45g",
        carbs: "65g",
        fats: "30g",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
          "Large tortilla wrap",
          "Grilled chicken",
          "Rice",
          "Black beans",
          "Cheese",
          "Guacamole",
          "Greek yogurt"
        ],
        instructions: [
          "Warm tortilla",
          "Layer rice and beans",
          "Add chicken and cheese",
          "Top with guacamole",
          "Roll tightly"
        ]
      },
      {
        id: 21,
        title: "Power Breakfast Bowl",
        calories: 820,
        protein: "42g",
        carbs: "90g",
        fats: "35g",
        prepTime: "20 mins",
        difficulty: "Medium",
        ingredients: [
          "Oatmeal",
          "Protein powder",
          "Whole milk",
          "Peanut butter",
          "Banana",
          "Granola",
          "Mixed nuts",
          "Dark chocolate chips"
        ],
        instructions: [
          "Cook oatmeal with milk",
          "Stir in protein powder",
          "Add peanut butter",
          "Top with remaining ingredients"
        ]
      },
      {
        id: 26,
        title: "Protein Pancake Stack",
        calories: 785,
        protein: "48g",
        carbs: "95g",
        fats: "28g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "Protein pancake mix",
          "Whole milk",
          "Eggs",
          "Banana",
          "Peanut butter",
          "Maple syrup",
          "Greek yogurt",
          "Mixed berries"
        ],
        instructions: [
          "Mix pancake batter with protein",
          "Cook pancakes until golden",
          "Layer with peanut butter",
          "Top with yogurt and berries",
          "Drizzle with maple syrup"
        ]
      }
    ],
    maintain: [
      {
        id: 11,
        title: "Mediterranean Quinoa Bowl",
        calories: 450,
        protein: "28g",
        carbs: "55g",
        fats: "15g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "Quinoa",
          "Chickpeas",
          "Cherry tomatoes",
          "Cucumber",
          "Feta cheese",
          "Olive oil",
          "Lemon juice"
        ],
        instructions: [
          "Cook quinoa and let cool",
          "Combine with vegetables",
          "Add chickpeas and feta",
          "Dress with olive oil and lemon"
        ]
      },
      {
        id: 12,
        title: "Balanced Chicken Stir-Fry",
        calories: 420,
        protein: "30g",
        carbs: "45g",
        fats: "16g",
        prepTime: "20 mins",
        difficulty: "Medium",
        ingredients: [
          "Chicken breast",
          "Brown rice",
          "Mixed vegetables",
          "Cashews",
          "Soy sauce",
          "Sesame oil"
        ],
        instructions: [
          "Cook rice separately",
          "Stir-fry chicken until done",
          "Add vegetables and cashews",
          "Combine with sauce and rice"
        ]
      },
      {
        id: 13,
        title: "Balanced Breakfast Toast",
        calories: 440,
        protein: "25g",
        carbs: "48g",
        fats: "18g",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
          "Whole grain bread",
          "Avocado",
          "Eggs",
          "Cherry tomatoes",
          "Everything bagel seasoning"
        ],
        instructions: [
          "Toast bread",
          "Mash avocado and spread",
          "Cook eggs to preference",
          "Top with tomatoes and seasoning"
        ]
      },
      {
        id: 14,
        title: "Turkey Wrap",
        calories: 430,
        protein: "28g",
        carbs: "50g",
        fats: "14g",
        prepTime: "10 mins",
        difficulty: "Easy",
        ingredients: [
          "Whole wheat wrap",
          "Turkey breast",
          "Hummus",
          "Mixed greens",
          "Cucumber",
          "Red pepper"
        ],
        instructions: [
          "Spread hummus on wrap",
          "Layer turkey and vegetables",
          "Roll tightly",
          "Cut diagonally"
        ]
      },
      {
        id: 15,
        title: "Fish Tacos",
        calories: 460,
        protein: "32g",
        carbs: "52g",
        fats: "15g",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "White fish fillets",
          "Corn tortillas",
          "Cabbage slaw",
          "Avocado",
          "Lime",
          "Greek yogurt sauce"
        ],
        instructions: [
          "Season and cook fish",
          "Prepare cabbage slaw",
          "Warm tortillas",
          "Assemble tacos with toppings"
        ]
      },
      {
        id: 22,
        title: "Asian Tofu Bowl",
        calories: 450,
        protein: "25g",
        carbs: "55g",
        fats: "18g",
        prepTime: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "Firm tofu",
          "Brown rice",
          "Edamame",
          "Carrots",
          "Broccoli",
          "Sesame seeds",
          "Teriyaki sauce"
        ],
        instructions: [
          "Press and cube tofu",
          "Cook rice",
          "Stir-fry vegetables",
          "Combine and add sauce",
          "Garnish with sesame"
        ]
      },
      {
        id: 23,
        title: "Chickpea Pasta Salad",
        calories: 440,
        protein: "22g",
        carbs: "58g",
        fats: "16g",
        prepTime: "20 mins",
        difficulty: "Easy",
        ingredients: [
          "Chickpea pasta",
          "Cherry tomatoes",
          "Cucumber",
          "Olives",
          "Red onion",
          "Mozzarella",
          "Italian dressing"
        ],
        instructions: [
          "Cook pasta al dente",
          "Chop vegetables",
          "Combine ingredients",
          "Toss with dressing",
          "Chill before serving"
        ]
      },
      {
        id: 24,
        title: "Baked Cod with Quinoa",
        calories: 425,
        protein: "35g",
        carbs: "45g",
        fats: "12g",
        prepTime: "35 mins",
        difficulty: "Medium",
        ingredients: [
          "Cod fillet",
          "Quinoa",
          "Asparagus",
          "Lemon",
          "Garlic",
          "Herbs",
          "Olive oil"
        ],
        instructions: [
          "Cook quinoa",
          "Season cod",
          "Bake fish and asparagus",
          "Plate with lemon sauce"
        ]
      },
      {
        id: 27,
        title: "Quinoa Stuffed Bell Peppers",
        calories: 445,
        protein: "26g",
        carbs: "52g",
        fats: "17g",
        prepTime: "40 mins",
        difficulty: "Medium",
        ingredients: [
          "Bell peppers",
          "Quinoa",
          "Ground turkey",
          "Black beans",
          "Corn",
          "Tomato sauce",
          "Mexican cheese blend",
          "Taco seasoning"
        ],
        instructions: [
          "Cook quinoa and turkey",
          "Mix with beans and corn",
          "Stuff peppers with mixture",
          "Top with cheese",
          "Bake until peppers are tender"
        ]
      }
    ]
  };

  return (
    <div className="nutrition-container">
      <section className="nutrition-header">
        <h1>Nutrition Guide</h1>
        <div className="recipe-type-selector">
          <label htmlFor="recipe-type">Select your goal:</label>
          <select
            id="recipe-type"
            value={recipeType}
            onChange={(e) => setRecipeType(e.target.value)}
          >
            <option value="cutting">Cutting Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="bulking">Gaining Weight</option>
          </select>
        </div>
      </section>

      <div className="recipes-grid">
        {recipes[recipeType].map((recipe) => (
          <div 
            key={recipe.id} 
            className="recipe-card"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <div className="recipe-card-header">
              <h3>{recipe.title}</h3>
              <div className="recipe-stats">
                <span>{recipe.calories} cal</span>
                <span>{recipe.prepTime}</span>
                <span>{recipe.difficulty}</span>
              </div>
            </div>
            <div className="recipe-macros">
              <div className="macro">
                <span className="macro-label">Protein</span>
                <span className="macro-value">{recipe.protein}</span>
              </div>
              <div className="macro">
                <span className="macro-label">Carbs</span>
                <span className="macro-value">{recipe.carbs}</span>
              </div>
              <div className="macro">
                <span className="macro-label">Fats</span>
                <span className="macro-value">{recipe.fats}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="recipe-modal">
          <div className="recipe-modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedRecipe(null)}
            >
              ×
            </button>
            <h2>{selectedRecipe.title}</h2>
            <div className="recipe-details">
              <div className="recipe-info">
                <h3>Nutritional Information</h3>
                <p>Calories: {selectedRecipe.calories}</p>
                <p>Protein: {selectedRecipe.protein}</p>
                <p>Carbs: {selectedRecipe.carbs}</p>
                <p>Fats: {selectedRecipe.fats}</p>
              </div>
              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nutrition;
