<?php
require 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Invalid request method']);
    exit();
}

// Get raw POST data and decode it
$rawData = file_get_contents('php://input');
error_log("Raw POST data: " . $rawData);

// Get POST data
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$weight = isset($_POST['weight']) ? filter_var($_POST['weight'], FILTER_VALIDATE_FLOAT) : 0;
$height = isset($_POST['height']) ? filter_var($_POST['height'], FILTER_VALIDATE_FLOAT) : 0;
$goal = isset($_POST['goal']) ? trim($_POST['goal']) : '';

// Log received data
error_log("Signup attempt - Username: $username, Weight: $weight, Height: $height, Goal: $goal");

// Validation
if (empty($username)) {
    echo json_encode(['error' => 'Username is required']);
    exit();
}

if (strlen($username) < 3) {
    echo json_encode(['error' => 'Username must be at least 3 characters long']);
    exit();
}

if (empty($password)) {
    echo json_encode(['error' => 'Password is required']);
    exit();
}

if (strlen($password) < 6) {
    echo json_encode(['error' => 'Password must be at least 6 characters long']);
    exit();
}

if ($weight <= 0) {
    echo json_encode(['error' => 'Please enter a valid weight']);
    exit();
}

if ($height <= 0) {
    echo json_encode(['error' => 'Please enter a valid height']);
    exit();
}

if (!in_array($goal, ['lose', 'maintain', 'gain'])) {
    echo json_encode(['error' => 'Please select a valid fitness goal']);
    exit();
}

try {
    // Check if username already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
        throw new Exception("Database error during username check");
    }
    
    $stmt->bind_param("s", $username);
    if (!$stmt->execute()) {
        error_log("Execute failed: " . $stmt->error);
        throw new Exception("Database error during username check");
    }
    
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        echo json_encode(['error' => 'This username is already taken. Please choose another one.']);
        exit();
    }
    $stmt->close();

    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (username, password, weight, height, goal) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
        throw new Exception("Database error during user creation");
    }
    
    $stmt->bind_param("ssdds", $username, $password, $weight, $height, $goal);
    if (!$stmt->execute()) {
        error_log("Execute failed: " . $stmt->error);
        throw new Exception("Database error during user creation");
    }
    
    $userId = $conn->insert_id;
    
    // Start session and set user data
    session_start();
    $_SESSION['user_id'] = $userId;
    $_SESSION['username'] = $username;

    echo json_encode([
        'success' => true,
        'message' => 'Account created successfully! Welcome to The Factory!',
        'user' => [
            'id' => $userId,
            'username' => $username
        ]
    ]);

} catch (Exception $e) {
    error_log("Signup error: " . $e->getMessage());
    error_log("MySQL Error: " . $conn->error);
    echo json_encode(['error' => 'An error occurred while creating your account. Please try again later.']);
} finally {
    if (isset($stmt)) {
        $stmt->close();
    }
    if (isset($conn)) {
        $conn->close();
    }
}
