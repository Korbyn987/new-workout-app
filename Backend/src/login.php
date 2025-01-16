<?php
require 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

$servername="localhost";
$username= "root";
$password = "";
$dbname = "thefactory";

$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
//retireve data
$username = $_POST['username'];
$password = $_POST['password'];

//validate login 
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if($result->num_rows == 1){
    //redirect to dashboard or homepage
    header("Location: The_Factory_Main_Page.html");
    $_SESSION['username'] = $username;
}else{
    echo "Invalid username or password. <a href='The_Factory_Main_Page.html'>Go back to main page </a>";
}
$conn->close();

?>