<?php

// Start session
session_start();

// Function to validate and sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Array to store registered users (in a real-world scenario, this should be stored in a database)
$users = [];

// Function to authenticate user login
function login($username, $password) {
    global $users;
    // Check if entered credentials match any registered user
    foreach ($users as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            // Set session variable to indicate user is logged in
            $_SESSION['username'] = $username;
            return true;
        }
    }
    return false;
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $username = sanitize_input($_POST["username"]);
    $password = sanitize_input($_POST["password"]);
    if (login($username, $password)) {
        // Redirect to course page upon successful login
        header("Location: course.html");
        exit();
    } else {
        echo "Invalid username or password. Please try again.";
    }
}

?>
