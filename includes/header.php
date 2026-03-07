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

    <div class="nav-left">
        <h1 class="logohead">Threadly</h1>
    </div>

    <div class="nav-center">
        <a href="home.php" class="nav-link">Home</a>
        <a href="products.php" class="nav-link">Products</a>
        <a href="about.php" class="nav-link">About</a>
        <a href="community.php" class="nav-link">Community</a>
        <a href="contact.php" class="nav-link">Contact</a>
    </div>

    <div class="nav-right">

        <a href="predictUI.php" class="predict-btn">
            <i class="fa-solid fa-chart-line"></i> Predict Price
        </a>

        <div class="nav-icons">

            <a href="cart.php" title="Cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>

           <div class="notification-menu">
            <button class="notif-btn" id="notifToggle">
                <i class="fa-solid fa-bell"></i>
                <span class="notif-count">3</span>
            </button>

            <div class="notification-dropdown" id="notifDropdown">

                <div class="notif-header">
                    <h3>Notifications</h3>
                </div>

                    <div class="notif-list">

                        <div class="notif-item">
                            <div class="notif-icon">
                                <i class="fa-solid fa-tag"></i>
                            </div>
                            <div class="notif-text">
                                <p><strong>Price Prediction Ready</strong></p>
                                <span>Your shoe prediction result is available.</span>
                            </div>
                        </div>

                        <div class="notif-item">
                            <div class="notif-icon">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="notif-text">
                                <p><strong>New Message</strong></p>
                                <span>You received a message from Alex.</span>
                            </div>
                        </div>

                        <div class="notif-item">
                            <div class="notif-icon">
                                <i class="fa-solid fa-fire"></i>
                            </div>
                            <div class="notif-text">
                                <p><strong>Trending Item</strong></p>
                                <span>Your listed shoes are trending.</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="profile-menu">
                <button class="profile-btn" id="profileToggle">
                    <i class="fa-solid fa-user"></i>
                </button>

                <div class="profile-dropdown" id="profileDropdown">
                    <a href="account.php">Account</a>
                    <a href="settings.php">Settings</a>

                    <form action="Controller/AuthController.php" method="POST">
                        <input type="hidden" name="action" value="logout">
                        <button type="submit" class="logout">Logout</button>
                    </form>
                </div>
            </div>

        </div>

    </div>

</nav>
<script src="Assest/Js/navbar.js"></script>