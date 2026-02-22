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
        <a  href="predict.php" class="button_pridect">Predict Price</a>  
    </nav>