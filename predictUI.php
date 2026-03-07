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
    <title>Threadly Price Prediction</title>
    <link rel="stylesheet" href="Assest/Css/predict.css">
</head>
<body>

    <div class="header">
        <button class="back-btn" onclick="window.location.href='home.php'">Back</button>
        <h1 class="logo">Threadly</h1>
    </div>

    <div class="form-grid">
        
        <div class="form-group">
            <label for="brand">Brand</label>
            <select id="brand">
                <option value="">Select brand</option>
                <option value="New Balance">New Balance</option>
                <option value="Under Armour">Under Armour</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Reebok">Reebok</option>
                <option value="Puma">Puma</option>
            </select>
        </div>

        <div class="form-group">
            <label for="category">Category</label>
            <select id="category">
                <option value="">Select category</option>
                <option value="Shoes">Shoes</option>
                <option value="Dress">Dress</option>
                <option value="Jacket">Jacket</option>
                <option value="Sweater">Sweater</option>
                <option value="Jeans">Jeans</option>
                <option value="T-Shirt">T-Shirt</option>
            </select>
        </div>

        <div class="form-group">
            <label for="material">Material</label>
            <select id="material">
                <option value="">Select material</option>
                <option value="Cotton">Cotton</option>
                <option value="Denim">Denim</option>
                <option value="Nylon">Nylon</option>
                <option value="Silk">Silk</option>
                <option value="Wool">Wool</option>
                <option value="Polyester">Polyester</option>
            </select>
        </div>

        <div class="form-group">
            <label for="size">Size</label>
            <select id="size">
                <option value="">Select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>

        <div class="form-group">
            <label for="color">Color</label>
            <select id="color">
                <option value="">Select color</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
            </select>
        </div>

        <div class="form-group estimate">
            <button class="estimate-btn" id="predictBtn">Estimate Price</button>
        </div>

        <div class="form-group price">
            <label>Predicted Price</label>
            <div class="price-output" id="price">$0.00</div>
        </div>
    </div>

    <script src="Assest/Js/pred.js"></script>
</body>
</html>