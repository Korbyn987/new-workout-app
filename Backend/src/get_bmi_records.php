<?php
require 'connection.php'; 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user_id = filter_input(INPUT_GET, 'user_id', FILTER_VALIDATE_INT);
    if (!$user_id) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Invalid user ID."]);
        exit;
    }
    
    $query = "SELECT height_feet, height_inches, weight_lbs, bmi, bmi_category, calculated_at 
              FROM bmi_records 
              WHERE user_id = ? 
              ORDER BY calculated_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();

    $result = $stmt->get_result();
    $records = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($records);
}
?>
