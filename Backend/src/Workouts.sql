CREATE DATABASE thefactory;
USE thefactory;

CREATE TABLE workouts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    duration INT,
    difficulty VARCHAR(20)
);

-- creating the table for memebers
CREATE TABLE members(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    gender ENUM('Male,', 'Female', 'Other'),
    join_date DATE

);
CREATE TABLE trainers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    experience_years INT
);

CREATE TABLE schedules(
    id INT AUTO_INCREMENT PRIMARY KEY,
    workout_id INT,
    trainer_id INT,
    start_time DATETIME,
    duration INT,
    FOREIGN KEY(workout_id) REFERENCES workouts(id),
    FOREIGN KEY (trainer_id) REFERENCES trainers(id)
);
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    weight INT, 
    height INT, 
    goal VARCHAR(50), -- Add goal column
    FOREIGN KEY (username) REFERENCES members(email)
);
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

    