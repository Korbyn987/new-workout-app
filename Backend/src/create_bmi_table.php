<?php
require 'connection.php';

try {
    // Drop existing table if it exists
    $sql = "DROP TABLE IF EXISTS bmi_records";
    $conn->query($sql);

    // Create BMI records table with the correct structure
    $sql = "CREATE TABLE bmi_records (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        height_feet INT NOT NULL,
        height_inches INT NOT NULL,
        weight_lbs DECIMAL(5,2) NOT NULL,
        bmi DECIMAL(4,2) NOT NULL,
        bmi_category VARCHAR(20) NOT NULL,
        calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )";

    if ($conn->query($sql)) {
        echo json_encode(['success' => true, 'message' => 'BMI records table created successfully']);
    } else {
        throw new Exception("Error creating BMI records table: " . $conn->error);
    }
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
} finally {
    $conn->close();
}
?>
