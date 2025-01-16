CREATE DATABASE thefactory;
USE thefactory;

-- Table for workouts
CREATE TABLE workouts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    duration INT,
    difficulty VARCHAR(20)
);

-- Table for members
CREATE TABLE members(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    gender ENUM('Male', 'Female', 'Other'),
    join_date DATE
);

-- Table for trainers
CREATE TABLE trainers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    experience_years INT
);

-- Table for schedules
CREATE TABLE schedules(
    id INT AUTO_INCREMENT PRIMARY KEY,
    workout_id INT,
    trainer_id INT,
    start_time DATETIME,
    duration INT,
    FOREIGN KEY(workout_id) REFERENCES workouts(id),
    FOREIGN KEY (trainer_id) REFERENCES trainers(id)
);

-- Table for users
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    weight INT, 
    height INT, 
    goal VARCHAR(50), -- Add goal column
    FOREIGN KEY (username) REFERENCES members(email)
);

-- Table for BMI records
CREATE TABLE bmi_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, 
    height_feet INT, 
    height_inches INT, 
    weight_lbs INT, 
    bmi DECIMAL(5, 2), 
    bmi_category VARCHAR(50), 
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert dummy data into members
INSERT INTO members (name, email, age, gender, join_date)
VALUES 
('John Doe', 'johndoe@example.com', 30, 'Male', '2023-01-01'),
('Jane Smith', 'janesmith@example.com', 28, 'Female', '2023-02-01');

-- Insert dummy data into users
INSERT INTO users (username, password, weight, height, goal)
VALUES 
('johndoe@example.com', 'password123', 180, 70, 'Lose weight'),
('janesmith@example.com', 'securepass', 150, 65, 'Maintain weight');

-- Insert dummy data into BMI records
INSERT INTO bmi_records (user_id, height_feet, height_inches, weight_lbs, bmi, bmi_category)
VALUES 
(1, 5, 9, 180, 25.3, 'Overweight'),
(2, 5, 5, 150, 25.0, 'Normal weight');
