<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_website";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form submission handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Close the database connection
        $conn->close();
        
        // Send response to JavaScript
        echo "<script>alert('Message submitted successfully.'); window.location.href = 'http://localhost/personal-portfolio-website/#home';</script>";
        exit; // Stop further execution of PHP script
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
