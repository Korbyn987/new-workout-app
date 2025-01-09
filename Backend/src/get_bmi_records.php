<?php
require 'config.php'; // Include your database connection file.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user_id = $_GET['user_id'];

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
