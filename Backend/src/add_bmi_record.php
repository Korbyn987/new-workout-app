<?php
require 'connection.php'; 

// Access Control Headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data === null) {
        // Try to get form data if JSON parsing fails
        $data = $_POST;
    }

    // Validate and sanitize inputs
    $user_id = filter_var($data['user_id'] ?? null, FILTER_VALIDATE_INT);
    $height_feet = filter_var($data['height_feet'] ?? null, FILTER_VALIDATE_INT);
    $height_inches = filter_var($data['height_inches'] ?? null, FILTER_VALIDATE_INT);
    $weight_lbs = filter_var($data['weight_lbs'] ?? null, FILTER_VALIDATE_FLOAT);
    $bmi = filter_var($data['bmi'] ?? null, FILTER_VALIDATE_FLOAT);
    $bmi_category = htmlspecialchars($data['bmi_category'] ?? '', ENT_QUOTES, 'UTF-8');

    // Check for missing or invalid inputs
    if ($user_id === false || $height_feet === false || $height_inches === false || 
        $weight_lbs === false || $bmi === false || empty($bmi_category)) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Invalid or missing input data."]);
        exit;
    }

    // Add additional validation checks
    if ($user_id <= 0 || $height_feet < 0 || $height_inches < 0 || $height_inches >= 12 || $weight_lbs <= 0 || $bmi <= 0) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Invalid input ranges."]);
        exit;
    }

    // Prepare and execute the insert query
    $query = "INSERT INTO bmi_records (user_id, height_feet, height_inches, weight_lbs, bmi, bmi_category) 
              VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("iiidds", $user_id, $height_feet, $height_inches, $weight_lbs, $bmi, $bmi_category);

    if ($stmt->execute()) {
        // Fetch the last inserted record ID
        $last_id = $stmt->insert_id;

        // Retrieve the inserted record
        $select_query = "SELECT * FROM bmi_records WHERE id = ?";
        $select_stmt = $conn->prepare($select_query);
        $select_stmt->bind_param("i", $last_id);
        $select_stmt->execute();
        $result = $select_stmt->get_result();

        if ($result->num_rows > 0) {
            $record = $result->fetch_assoc();
            http_response_code(201); // Created
            echo json_encode(["success" => true, "message" => "BMI record added successfully.", "record" => $record]);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(["success" => false, "message" => "Failed to retrieve the added record."]);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["success" => false, "message" => "Failed to add BMI record.", "error" => $stmt->error]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
