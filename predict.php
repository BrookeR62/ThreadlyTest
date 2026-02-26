<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Assest/Css/predict.css">
    <title>Prediction Page</title>
</head>
<body>
    <div class="nav_spacing">
        <a href="home.php" class="backbutton">Back</a>
        <div class="threadlylogin"><h1>Threadly</h1></div>
    </div>

    <div class="ellipse">
    <div  class="leftellipse"></div>
     <div class="rightellipse"></div>
     </div>
    
    <div class="camera_container">
        <h3 class="upload">Upload Photo</h3>
        <div class="camera_holder">
            <img src="Assest/Image/camera.png" alt="Camera-logo">
        </div>
    </div>
   






    </div>

    
</body>
</html>