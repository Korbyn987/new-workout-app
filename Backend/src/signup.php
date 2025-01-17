<?php
require 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "connection.php";


$username = $_POST['username'];
$password = $_POST['password'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$goal = $_POST['goal'];

// Insert data into the database
$sql = "INSERT INTO users (username, password, weight, height, goal) VALUES ('$username', '$password', '$weight', '$height', '$goal')";

if ($conn->query($sql) === TRUE) {
    // Redirect to the main page
    header("Location: The_Factory_Main_Page.html");
    exit(); // Stop script execution after redirection
} else {
    // If there's an error, display it
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
