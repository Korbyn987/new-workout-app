<?php
require 'connection.php'; 

// Access Control Headers
header("Access-Control-Allow-Origin: *"); // Consider restricting to specific origins in production.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize inputs
    $user_id = filter_input(INPUT_POST, 'user_id', FILTER_VALIDATE_INT);
    $height_feet = filter_input(INPUT_POST, 'height_feet', FILTER_VALIDATE_INT);
    $height_inches = filter_input(INPUT_POST, 'height_inches', FILTER_VALIDATE_INT);
    $weight_lbs = filter_input(INPUT_POST, 'weight_lbs', FILTER_VALIDATE_FLOAT);
    $bmi = filter_input(INPUT_POST, 'bmi', FILTER_VALIDATE_FLOAT);
    $bmi_category = filter_input(INPUT_POST, 'bmi_category', FILTER_SANITIZE_STRING);

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
