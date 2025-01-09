<?php
require 'config.php'; // Include your database connection file.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_POST['user_id'];
    $height_feet = $_POST['height_feet'];
    $height_inches = $_POST['height_inches'];
    $weight_lbs = $_POST['weight_lbs'];
    $bmi = $_POST['bmi'];
    $bmi_category = $_POST['bmi_category'];

    $query = "INSERT INTO bmi_records (user_id, height_feet, height_inches, weight_lbs, bmi, bmi_category) 
              VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("iiiiis", $user_id, $height_feet, $height_inches, $weight_lbs, $bmi, $bmi_category);

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
            echo json_encode(["success" => true, "message" => "BMI record added successfully.", "record" => $record]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to retrieve the added record."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add BMI record."]);
    }
}
?>
