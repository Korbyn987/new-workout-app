<?php
require 'connection.php'; 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Validate and sanitize input
    $user_id = filter_input(INPUT_GET, 'user_id', FILTER_VALIDATE_INT);

    if ($user_id === false || $user_id <= 0) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Invalid user ID."]);
        exit;
    }

    // Prepare and execute the select query
    $query = "SELECT height_feet, height_inches, weight_lbs, bmi, bmi_category, calculated_at 
              FROM bmi_records 
              WHERE user_id = ? 
              ORDER BY calculated_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $user_id);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $records = $result->fetch_all(MYSQLI_ASSOC);

        if (!empty($records)) {
            echo json_encode(["success" => true, "records" => $records]);
        } else {
            echo json_encode(["success" => false, "message" => "No records found for the given user ID."]);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["success" => false, "message" => "Failed to retrieve BMI records.", "error" => $stmt->error]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
