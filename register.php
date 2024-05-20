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

// Function to register a new user
function register($username, $password) {
    global $users;
    // Check if username already exists
    foreach ($users as $user) {
        if ($user['username'] === $username) {
            return "Username already exists. Please choose another one.";
        }
    }
    // Add new user
    $users[] = array('username' => $username, 'password' => $password);
    return "Registration successful!";
}

// Handle registration form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    $newUsername = sanitize_input($_POST["new-username"]);
    $newPassword = sanitize_input($_POST["new-password"]);
    $registrationResult = register($newUsername, $newPassword);
    echo $registrationResult;
}

?>
