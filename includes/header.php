<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>

<?php

if (!isset($page_title)) {
    $page_title = "Threadly";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
   <link rel="stylesheet" href="Assest/Css/home.css">
    <title><?php echo $page_title; ?></title>
</head>
<body>
    <nav class="nav">
        <div class="logohead"><h1>Threadly</h1></div>
        <div class="navigation">
            <a href="home.php" class="n">Home</a>
            <a href="about.php" class="n">About</a>
            <a href="community.php" class="n">Community</a>
            <a href="contact.php" class="n">Contact</a>         
        </div>
     <a href="predict.php" class="button_pridect">Predict Price</a>
       <div class="nav-icons">   
            <a href="messages.php" title="Messages">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="notifications.php" title="Notifications">
                <i class="fa-solid fa-bell"></i>
            </a>
            <div class="profile-menu">
                <button class="profile-btn" type="button" id="profileToggle">
                    <i class="fa-solid fa-user"></i>
                </button>
                <div class="profile-dropdown" id="profileDropdown">
                    <a href="account.php">Account</a>
                    <a href="settings.php">Settings</a>
                  <form action="Controller/AuthController.php" method="POST">
                    <input type="hidden" name="action" value="logout">
                    <button type="submit" class="logout">
                        Logout
                    </button>
                </form>
                </div>
            </div>
        </div>
    </nav>