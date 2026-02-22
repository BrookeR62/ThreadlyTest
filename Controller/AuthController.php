<?php

session_start();

require_once "../Model/UserModel.php";

$userModel = new UserModel();

if (isset($_POST['action']) && $_POST['action'] == "login") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = $userModel->login($username, $password);

    if ($user) {

        // SAVE SESSION
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['username'] = $user['username'];

        // ✅ CORRECT REDIRECT
        header("Location: ../homepage.php");
        exit();

    } else {

        // ✅ CORRECT REDIRECT BACK TO LOGIN
        header("Location: ../index.php?error=wrong");
        exit();

    }
}
?>