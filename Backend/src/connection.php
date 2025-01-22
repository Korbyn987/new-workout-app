<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "thefactory";

try {
    // First connect without selecting a database
    $conn = new mysqli($servername, $username, $password);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Create database if it doesn't exist
    $sql = "CREATE DATABASE IF NOT EXISTS thefactory";
    if (!$conn->query($sql)) {
        throw new Exception("Error creating database: " . $conn->error);
    }

    // Select the database
    $conn->select_db('thefactory');

    // Create users table if it doesn't exist
    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        weight DECIMAL(5,2) NOT NULL,
        height DECIMAL(5,2) NOT NULL,
        goal ENUM('lose', 'maintain', 'gain') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    if (!$conn->query($sql)) {
        throw new Exception("Error creating users table: " . $conn->error);
    }

    $conn->set_charset("utf8");

} catch (Exception $e) {
    // Log the error and return a JSON response
    error_log("Database connection error: " . $e->getMessage());
    if (!headers_sent()) {
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Database connection error. Please try again later.']);
        exit();
    }
}
?>
