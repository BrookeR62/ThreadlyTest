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
    <title>Threadly Prediction</title>
    <link rel="stylesheet" href="Assest/Css/predict.css">
</head>
<body>

    <div class="header">
        <button class="back-btn" onclick="window.location.href='home.php'">Back</button>
        <h1 class="logo">Threadly</h1>
    </div>

    <div class="form-grid">
        
        <div class="form-group">
            <label>Brand</label>
            <select id="brand">
                <option>Select brand</option>
                <option>New Balance</option>
                <option>Under Armour</option>
                <option>Nike</option>
                <option>Adidas</option>
                <option>Reebok</option>
                <option>Puma</option>
            </select>
        </div>

        <div class="form-group">
            <label>Category</label>
            <select id="category">
                <option>Select category</option>
                <option>Shoes</option>
                <option>Dress</option>
                <option>Jacket</option>
                <option>Sweater</option>
                <option>Jeans</option>
                <option>T-Shirt</option>
            </select>
        </div>

        <div class="form-group">
            <label>Material</label>
            <select id="material">
                <option>Select material</option>
                <option>Cotton</option>
                <option>Denim</option>
                <option>Nylon</option>
                <option>Silk</option>
                <option>Wool</option>
                <option>Polyester</option>
            </select>
        </div>

        <div class="form-group">
            <label>Size</label>
            <select id="size">
                <option>Select size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
        </div>

        <div class="form-group">
            <label>Color</label>
            <select id="color">
                <option>Select color</option>
                <option>Black</option>
                <option>White</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Red</option>
            </select>
        </div>

        <div class="form-group estimate">
            <button class="estimate-btn" id="predictBtn">Estimated price</button>
        </div>

        <div class="form-group price">
            <label>Predicted Price</label>
            <div class="price-output" id="price">$0.00</div>
        </div>
    </div>
    <script src="Assest/Js/predict.js"></script>
</body>
</html>