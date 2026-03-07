<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$page_title = "Home - Threadly";
include("includes/header.php");
?>

<section class="hero">
    <div class="hero-text">
        <h1>Find the Best Fashion Deals</h1>
        <p>Discover trending shoes, clothes, and fashion items from the community.</p>
        <a href="predictUI.php" class="hero-btn">Predict Item Price</a>
    </div>
</section>

<section class="products">

    <h2 class="section-title">Featured Product</h2>

    <div class="product-container">

        <div class="product-slider">

            <img src="Assest/Image/leftarrow.png" id="arrowleft" class="arrowleft">

            <div class="product-image-box">
                <img src="Assest/Image/shoes.png" id="productImage" alt="Shoes">
                <div class="shadow"></div>
                <h3 id="type">Shoes</h3>
            </div>

            <img src="Assest/Image/rightarrow.png" id="arrowright" class="arrowright">

        </div>

        <div class="product-info">

            <h3 id="name1">Adidas men Lite Racer Adapt 7.0</h3>
            <p id="name2">Shoes Opens in a new window</p>
            <p id="name3">or tab</p>

            <div class="pricebox">
                <p><strong id="price">$22.00</strong> or Best Offer</p>
                <p><strong id="shipping">$8.75</strong> shipping</p>
            </div>

            <p class="brand">Brand New · Size US M 10.5 +</p>

            <button class="buy-btn">View Item</button>

        </div>

    </div>

</section>

<script src="Assest/Js/homepage.js"></script>

<?php include("includes/footer.php"); ?>