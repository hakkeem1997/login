<?php
$servername = "localhost:8080";
$username = "root";
$password = "root";
$dbname= "frame";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// // Create database
// $sql = "CREATE DATABASE task";
// if ($conn->query($sql) === TRUE) {
//   echo "Database created successfully";
// } else {
//   echo "Error creating database: " . $conn->error;
// }

$sql = "CREATE TABLE signup (

username VARCHAR(30) NOT NULL,
pasword VARCHAR(30) NOT NULL


)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }
  
$conn->close();
?>
