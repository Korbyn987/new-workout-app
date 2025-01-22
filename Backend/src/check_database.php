<?php
require 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

try {
    // Check if database exists
    $result = $conn->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'thefactory'");
    if ($result->num_rows === 0) {
        // Create database if it doesn't exist
        $conn->query("CREATE DATABASE IF NOT EXISTS thefactory");
        echo json_encode(['message' => 'Database created successfully']);
    }

    // Select the database
    $conn->select_db('thefactory');

    // Check if users table exists and create it if it doesn't
    $result = $conn->query("SHOW TABLES LIKE 'users'");
    if ($result->num_rows === 0) {
        $sql = "CREATE TABLE users (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            weight DECIMAL(5,2) NOT NULL,
            height DECIMAL(5,2) NOT NULL,
            goal ENUM('lose', 'maintain', 'gain') NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(['message' => 'Users table created successfully']);
        } else {
            echo json_encode(['error' => 'Error creating users table: ' . $conn->error]);
        }
    } else {
        // If table exists, show its structure
        $result = $conn->query("DESCRIBE users");
        $columns = [];
        while($row = $result->fetch_assoc()) {
            $columns[] = $row;
        }
        echo json_encode(['message' => 'Table structure:', 'columns' => $columns]);
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} finally {
    $conn->close();
}
?>
