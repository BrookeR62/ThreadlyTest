<?php

session_start();

require_once "../Model/UserModel.php";

$userModel = new UserModel();


if (isset($_POST['action']) && $_POST['action'] == "login") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = $userModel->login($username, $password);

    if ($user) {

        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['username'] = $user['username'];

        header("Location: ../home.php");
        exit();

    } else {

        header("Location: ../index.php?error=wrong");
        exit();

    }
}



if (isset($_POST['action']) && $_POST['action'] == "register") {

    $email = $_POST['email'];
    $username = $_POST['username'];
    $age = $_POST['age'];
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $birthdate = $_POST['birthdate'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

   
    if ($password != $confirm_password) {

        header("Location: ../registration.php?error=password");
        exit();

    }

 
    $result = $userModel->register(
        $email,
        $username,
        $age,
        $first_name,
        $middle_name,
        $last_name,
        $gender,
        $address,
        $birthdate,
        $password
    );

    if ($result) {

        header("Location: ../index.php?success=registered");
        exit();

    } else {

        header("Location: ../registration.php?error=failed");
        exit();

    }

}



if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    $_SESSION = [];
    session_destroy();
    header("Location: ../index.php");
    exit();
}

?>