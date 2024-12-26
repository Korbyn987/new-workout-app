<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: login.html"); //redirect to login page if not logged in 
    exit();
}
$username = $_SESSION['username'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome <?php echo $username; ?></h2>
</body>

</html>