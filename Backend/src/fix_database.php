<?php
$servername = "localhost";
$username = "root";
$password = "";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

try {
    // Connect without selecting a database
    $conn = new mysqli($servername, $username, $password);
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Drop and recreate the database
    $sql = "DROP DATABASE IF EXISTS thefactory";
    if (!$conn->query($sql)) {
        throw new Exception("Error dropping database: " . $conn->error);
    }

    $sql = "CREATE DATABASE thefactory";
    if (!$conn->query($sql)) {
        throw new Exception("Error creating database: " . $conn->error);
    }

    // Select the new database
    $conn->select_db('thefactory');

    // Create users table
    $sql = "CREATE TABLE users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        weight DECIMAL(5,2) NOT NULL,
        height DECIMAL(5,2) NOT NULL,
        goal ENUM('lose', 'maintain', 'gain') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($sql)) {
        echo json_encode(['success' => true, 'message' => 'Database recreated successfully']);
    } else {
        throw new Exception("Error creating users table: " . $conn->error);
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>
