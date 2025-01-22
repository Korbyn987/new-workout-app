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

$input = json_decode(file_get_contents('php://input'), true);
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($username)) {
    echo json_encode(['error' => 'Username is required']);
    exit();
}

if (empty($password)) {
    echo json_encode(['error' => 'Password is required']);
    exit();
}

$servername="localhost";
$username_db= "root";
$password_db = "";
$dbname = "thefactory";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

//check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

try {
    // Prepare the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo json_encode(['error' => 'No account found with this username']);
        exit();
    }

    $user = $result->fetch_assoc();
    
    // Verify password (in a real app, use password_verify with hashed passwords)
    if ($password === $user['password']) {
        // Start session and set user data
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        echo json_encode([
            'success' => true,
            'message' => 'Login successful',
            'user' => [
                'id' => $user['id'],
                'username' => $user['username']
            ]
        ]);
    } else {
        echo json_encode(['error' => 'Incorrect password']);
    }
} catch (Exception $e) {
    error_log($e->getMessage());
    echo json_encode(['error' => 'An error occurred during login. Please try again later.']);
} finally {
    if (isset($stmt)) {
        $stmt->close();
    }
    $conn->close();
}
?>